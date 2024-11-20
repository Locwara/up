import os
import django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'doan1.settings')  # Thay doan1 bằng tên project của bạn
django.setup()

from django.core import serializers
from home.models import (
    CustomUser,
    Nhanvien,
    Calam,
    Nghiphep,
    Bangluong,
    Thietbi,
    Baotri,
    Dungcu,
    Thongtinnguyenlieu,
    LichSuThaoTac
)

# Thứ tự dump dữ liệu (từ bảng độc lập đến bảng phụ thuộc)
models_order = [
    CustomUser,        # Dump CustomUser trước vì các bảng khác phụ thuộc
    Nhanvien,         # Dump Nhanvien trước vì có các bảng phụ thuộc
    Calam,
    Nghiphep,
    Bangluong,
    Thietbi,
    Baotri,
    Dungcu,
    Thongtinnguyenlieu,
    LichSuThaoTac,
]

# Dump từng model
for model in models_order:
    try:
        data = serializers.serialize('json', model.objects.all(), indent=2, ensure_ascii=False)
        filename = f'data/{model.__name__.lower()}_backup.json'
        
        # Tạo thư mục data nếu chưa tồn tại
        os.makedirs('data', exist_ok=True)
        
        with open(filename, 'w', encoding='utf8') as f:
            f.write(data)
        print(f"Đã export dữ liệu của {model.__name__}")
    except Exception as e:
        print(f"Lỗi khi export {model.__name__}: {str(e)}")