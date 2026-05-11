import qrcode
from PIL import Image
import os

try:
    # Use the 4th logo (electric cyan)
    logo_path = "/Users/dushyantacharya/.gemini/antigravity/brain/15357be8-6624-41cd-b314-1dbddbe6770a/kindora_logo_4_1778472181825.png"
    logo = Image.open(logo_path)

    # Adjust logo size (around 25% of the QR code size)
    basewidth = 120
    wpercent = (basewidth / float(logo.size[0]))
    hsize = int((float(logo.size[1]) * float(wpercent)))
    logo = logo.resize((basewidth, hsize), Image.Resampling.LANCZOS)

    # Setup the QR code with high error correction to allow for the logo
    QRcode = qrcode.QRCode(
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=12,
        border=4,
    )
    
    # The exact UPI URL format
    upi_url = "upi://pay?pa=8544760002@nyes&pn=KINDORA&cu=INR"
    QRcode.add_data(upi_url)
    QRcode.make(fit=True)

    # Generate QR image
    QRimg = QRcode.make_image(fill_color="#000000", back_color="white").convert('RGB')

    # Paste the logo in the center
    pos = ((QRimg.size[0] - logo.size[0]) // 2, (QRimg.size[1] - logo.size[1]) // 2)
    QRimg.paste(logo, pos)

    # Save to the static folder for the website
    save_path = "/Users/dushyantacharya/Documents/Flavourtown/KrishiSankalp/static/kindora_qr.png"
    QRimg.save(save_path)
    print(f"Success! QR Code saved to {save_path}")

except Exception as e:
    print(f"Error: {e}")
