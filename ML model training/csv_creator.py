import os
import xml.etree.ElementTree as ET
import csv

# ✅ Set this to your main folder (with subfolders) containing XML files
XML_FOLDER = r"C:\\Users\\kanaa\\OneDrive\\Desktop\\ML_project\\pan-plagiarism-corpus-2011\\intrinsic-detection-corpus\\suspicious-document"
OUTPUT_CSV = "plagiarism_spans.csv"

def extract_annotations_recursive(folder_path):
    all_data = []

    for root_dir, _, files in os.walk(folder_path):
        for filename in files:
            if filename.endswith(".xml"):
                file_path = os.path.join(root_dir, filename)
                try:
                    tree = ET.parse(file_path)
                    root = tree.getroot()
                    doc_name = root.attrib.get("reference", filename.replace(".xml", ".txt"))

                    for feature in root.findall("feature"):
                        if feature.attrib.get("name") == "plagiarism":
                            offset = int(feature.attrib["this_offset"])
                            length = int(feature.attrib["this_length"])
                            all_data.append([
                                doc_name,
                                offset,
                                offset + length,
                                feature.attrib.get("type", "unknown"),
                                feature.attrib.get("obfuscation", "none")
                            ])
                except Exception as e:
                    print(f" Error parsing {file_path}: {e}")
    return all_data

def save_csv(data, output_path):
    headers = ["suspicious_doc", "susp_start", "susp_end", "plagiarism_type", "obfuscation"]
    if data:
        with open(output_path, "w", newline="", encoding="utf-8") as f:
            writer = csv.writer(f)
            writer.writerow(headers)
            writer.writerows(data)
        print(f"\n CSV saved: {os.path.abspath(output_path)}")
    else:
        print(" No plagiarism annotations found.")

# Run the full process
annotations = extract_annotations_recursive(XML_FOLDER)
save_csv(annotations, OUTPUT_CSV)
