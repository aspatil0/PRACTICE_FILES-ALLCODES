import os
import shutil

# ====== CHANGE THIS PATH ======
SOURCE_FOLDER = r"C:\Users\YourName\Downloads"

FILE_TYPES = {
    "Images": [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".webp"],
    "Videos": [".mp4", ".mkv", ".avi", ".mov"],
    "Documents": [".pdf", ".docx", ".doc", ".txt", ".pptx", ".xlsx"],
    "Code": [".py", ".js", ".html", ".css", ".cpp", ".java"],
    "Archives": [".zip", ".rar", ".tar", ".gz"]
}

def organize_files(folder):
    if not os.path.exists(folder):
        print("Folder does not exist!")
        return

    for file in os.listdir(folder):
        file_path = os.path.join(folder, file)

        if os.path.isfile(file_path):
            _, ext = os.path.splitext(file)
            ext = ext.lower()

            moved = False
            for category, extensions in FILE_TYPES.items():
                if ext in extensions:
                    category_folder = os.path.join(folder, category)
                    os.makedirs(category_folder, exist_ok=True)

                    shutil.move(file_path, os.path.join(category_folder, file))
                    print(f"Moved {file} → {category}/")
                    moved = True
                    break

            if not moved:
                other_folder = os.path.join(folder, "Others")
                os.makedirs(other_folder, exist_ok=True)
                shutil.move(file_path, os.path.join(other_folder, file))
                print(f"Moved {file} → Others/")

    print("\n✅ Files Organized Successfully!")

organize_files(SOURCE_FOLDER)
