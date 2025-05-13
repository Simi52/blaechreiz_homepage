import os

# Define the folder where the images are stored
folder_path = "Fasnacht18" 

def rename_images(directory):
    # Get all image files (png, jpg, jpeg) and sort them
    files = sorted([f for f in os.listdir(directory) if f.lower().endswith(('.png', '.jpg', '.jpeg', 'HEIC'))])

    for idx, file in enumerate(files, start=1):
        # ext = file.split('.')[-1]  # Extract file extension
        new_name = f"Image{idx}.png"  # New file name
        old_path = os.path.join(directory, file)
        new_path = os.path.join(directory, new_name)

        os.rename(old_path, new_path)
        print(f"Renamed: {file} -> {new_name}")

# Run the renaming function
rename_images(folder_path)

