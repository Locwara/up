from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import (
    CustomUser, Calam, Nghiphep, Bangluong, Nhanvien,
    Thietbi, Baotri, Dungcu, Thongtinnguyenlieu, LichSuThaoTac
)

# Đăng ký model `CustomUser` với giao diện tùy chỉnh
@admin.register(CustomUser)
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'is_staff', 'is_active')
    search_fields = ('username', 'email')
    list_filter = ('is_staff', 'is_active')

# Đăng ký các model còn lại
@admin.register(Calam)
class CalamAdmin(admin.ModelAdmin):
    list_display = ('macalam', 'manv', 'ngay', 'giobd', 'giokt')
    list_filter = ('ngay',)

@admin.register(Nghiphep)
class NghiphepAdmin(admin.ModelAdmin):
    list_display = ('manp', 'manv', 'ngaybd', 'ngaykt', 'lydonghi', 'trangthai')
    list_filter = ('trangthai',)

@admin.register(Bangluong)
class BangluongAdmin(admin.ModelAdmin):
    list_display = ('maluong', 'manv', 'thangluong', 'sogio', 'luongcoban', 'tongluong')
    list_filter = ('thangluong',)
    search_fields = ('manv__hoten',)

@admin.register(Nhanvien)
class NhanvienAdmin(admin.ModelAdmin):
    list_display = ('manv', 'hoten', 'ngaysinh', 'gioitinh', 'sdt', 'diachi', 'ngayvaolam', 'vitricongviec', 'trangthai')
    search_fields = ('hoten',)
    list_filter = ('vitricongviec', 'trangthai')

@admin.register(Thietbi)
class ThietbiAdmin(admin.ModelAdmin):
    list_display = ('matb', 'tentb', 'loaitb', 'soluong', 'tinhtrang', 'ngaymua', 'giamua')
    list_filter = ('loaitb',)

@admin.register(Baotri)
class BaotriAdmin(admin.ModelAdmin):
    list_display = ('mabt', 'matb', 'ngaybt', 'mota', 'chiphi', 'nguoithuchien')
    list_filter = ('ngaybt',)

@admin.register(Dungcu)
class DungcuAdmin(admin.ModelAdmin):
    list_display = ('madc', 'tendc', 'soluong', 'dvt', 'ngaymua', 'giamua')
    search_fields = ('tendc',)

@admin.register(Thongtinnguyenlieu)
class ThongtinnguyenlieuAdmin(admin.ModelAdmin):
    list_display = ('manl', 'tennl', 'dvt', 'soluong', 'gia', 'ngayhethan')
    list_filter = ('ngayhethan',)

@admin.register(LichSuThaoTac)
class LichSuThaoTacAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'loai_thao_tac', 'noi_dung', 'ngay_thuc_hien')
    list_filter = ('loai_thao_tac',)
    