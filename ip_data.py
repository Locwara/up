import os
import django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'doan1.settings')  # Thay doan1 bằng tên project của bạn
django.setup()

from django.core import management

# Thứ tự các file cần import
files_order = [
    'customuser',
    'nhanvien',
    'calam',
    'nghiphep',
    'bangluong',
    'thietbi',
    'baotri',
    'dungcu',
    'thongtinnguyenlieu',
    'lichsuthaotac',
]

# Import từng file
for model in files_order:
    try:
        file_path = f'data/{model}_backup.json'
        if os.path.exists(file_path):
            print(f"Đang import {model}...")
            management.call_command('loaddata', file_path)
            print(f"Đã import xong {model}")
    except Exception as e:
        print(f"Lỗi khi import {model}: {str(e)}")