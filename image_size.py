from PIL import Image

# 打开原始图像
original_image = Image.open('/Users/zym/个人主页/ymzhong66.github.io/images/skd.png')

# 获取图像的分辨率
width, height = original_image.size
print(f"Original image resolution: {width}x{height} pixels")

# 打开要裁剪的图像
image_to_crop = Image.open('/Users/zym/个人主页/ymzhong66.github.io/images/sdu1.png')

# 计算中心裁剪坐标
left = (image_to_crop.width - width) // 2
top = (image_to_crop.height - height) // 2
right = left + width
bottom = top + height

# 从中心裁剪图像（保持与原始图像相同分辨率）
cropped_image = image_to_crop.crop((left, top, right, bottom))

# 转换为RGB模式（移除Alpha通道）
cropped_image = cropped_image.convert('RGB')

# 保存裁剪后的图像
cropped_image.save('cropped_image.jpg')