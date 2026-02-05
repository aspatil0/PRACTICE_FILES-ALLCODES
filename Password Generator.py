import secrets
import string
import re

def generate_password(length=12):
    if length < 8:
        print("Password length should be at least 8.")
        return None

    characters = string.ascii_letters + string.digits + string.punctuation
    password = ''.join(secrets.choice(characters) for _ in range(length))
    return password


def check_strength(password):
    strength = 0

    if len(password) >= 8:
        strength += 1
    if re.search(r"[A-Z]", password):
        strength += 1
    if re.search(r"[a-z]", password):
        strength += 1
    if re.search(r"[0-9]", password):
        strength += 1
    if re.search(r"[!@#$%^&*(),.?\":{}|<>]", password):
        strength += 1

    if strength <= 2:
        return "Weak ❌"
    elif strength == 3 or strength == 4:
        return "Medium ⚠️"
    else:
        return "Strong ✅"


print("1. Generate Password")
print("2. Check Password Strength")

choice = input("Choose option (1/2): ")

if choice == "1":
    length = int(input("Enter password length: "))
    pwd = generate_password(length)
    if pwd:
        print("\nGenerated Password:", pwd)
        print("Strength:", check_strength(pwd))

elif choice == "2":
    user_pwd = input("Enter password to check: ")
    print("Strength:", check_strength(user_pwd))

else:
    print("Invalid choice.")
