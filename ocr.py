import cv2
import pytesseract
from PIL import Image

pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

image_path = "result_card.jpg"
image = cv2.imread(image_path)

gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

gray = cv2.threshold(gray, 150, 255, cv2.THRESH_BINARY)[1]

text = pytesseract.image_to_string(gray)

print("Extracted Text:\n", text)

title = text.split('\n')[0]
print("\nTitle Detected:", title)
