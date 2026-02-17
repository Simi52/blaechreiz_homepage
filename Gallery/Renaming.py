import os
import argparse
# Define the folder where the images are stored
folder_path = "Fasnacht 2026" 

def rename_images(directory):
    # Get all image files (png, jpg, jpeg) and sort them
    files = sorted([f for f in os.listdir(directory) if f.lower().endswith(('.png', '.jpg', '.jpeg', '.heic'))])

    for idx, file in enumerate(files, start=1):
        # ext = file.split('.')[-1]  # Extract file extension
        new_name = f"Image{idx}.png"  # New file name
        old_path = os.path.join(directory, file)
        new_path = os.path.join(directory, new_name)

        if os.path.exists(new_path):
            print(f"Skipping {file} — {new_name} already exists!")
            continue

        os.rename(old_path, new_path)
        print(f"Renamed: {file} -> {new_name}")

<<<<<<< HEAD
# Run the renaming function
# rename_images(folder_path)

=======
>>>>>>> d7beb0c6e0b3674d398f9dd317cbc91cb8a40ee6
if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Rename images in a folder.")
    parser.add_argument("folder", help="Path to the folder containing images")
    args = parser.parse_args()

    rename_images(args.folder)

