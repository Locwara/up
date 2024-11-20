from .models import CustomUser ,Calam, Baotri, Dungcu, Thongtinnguyenlieu, Bangluong, Nghiphep, Thietbi, Nhanvien
from django import forms
from django.contrib.auth.forms import UserCreationForm
from django import forms
from django_recaptcha.fields import ReCaptchaField  
from django_recaptcha.widgets import ReCaptchaV2Checkbox  

class LoginForm(forms.Form):
    username = forms.CharField(required=False)
    password = forms.CharField(widget=forms.PasswordInput,required=False)
    captcha = ReCaptchaField(widget=ReCaptchaV2Checkbox())
class ChangePasswordForm(forms.Form):
    old_password = forms.CharField(
        widget=forms.PasswordInput(attrs={
            'class': 'form-control',
            'placeholder': 'Nhập mật khẩu cũ'
        }),
        label="Mật khẩu cũ"
    )
    new_password = forms.CharField(
        widget=forms.PasswordInput(attrs={
            'class': 'form-control',
            'placeholder': 'Nhập mật khẩu mới'
        }),
        label="Mật khẩu mới"
    )
    confirm_password = forms.CharField(
        widget=forms.PasswordInput(attrs={
            'class': 'form-control',
            'placeholder': 'Xác nhận mật khẩu mới'
        }),
        label="Xác nhận mật khẩu"
    )

    def clean(self):
        cleaned_data = super().clean()
        new_password = cleaned_data.get('new_password')
        confirm_password = cleaned_data.get('confirm_password')
        
        if new_password and confirm_password:
            if new_password != confirm_password:
                raise forms.ValidationError("Mật khẩu xác nhận không khớp")
        return cleaned_data
class nhap_calam(forms.ModelForm):
    class Meta:
        model = Calam
        fields = ['manv', 'ngay', 'giobd', 'giokt']
        widgets = {
            'manv': forms.Select(attrs={'placeholder': 'Chọn nhân viên'}),  
            'ngay': forms.DateInput(attrs={'type': 'date', 'placeholder': 'Ngày'}),
            'giobd': forms.TimeInput(attrs={'type': 'time', 'placeholder': 'Giờ bắt đầu'}),
            'giokt': forms.TimeInput(attrs={'type': 'time','placeholder': 'Giờ kết thúc'}),
        }
    
    def __init__(self, *args, **kwargs):
        super(nhap_calam, self).__init__(*args, **kwargs)
        self.fields['manv'].queryset = Nhanvien.objects.all()
        self.fields['manv'].label_from_instance = lambda obj: f"{obj.manv} - {obj.hoten}"

class CustomUserCreationForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = CustomUser
        fields = ('username', 'tentk', 'email', 'phone', 'address', 'birth_date', 'password1', 'password2')
        
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['phone'].widget.attrs.update({'class': 'input', 'placeholder': 'Số điện thoại'})
        self.fields['address'].widget.attrs.update({'class': 'input', 'placeholder': 'Địa chỉ'})
        self.fields['birth_date'].widget.attrs.update({'class': 'input', 'type': 'date'})
        self.fields['email'].widget.attrs.update({'class': 'input', 'placeholder': 'Email'})
class nhap_baotri(forms.ModelForm):
    class Meta:
        model = Baotri
        fields = ['matb', 'ngaybt', 'mota', 'chiphi', 'nguoithuchien']
        widgets = {
            'matb': forms.Select(attrs={'placeholder': 'Chọn thiết bị'}),  
            'ngaybt': forms.DateInput(attrs={'type' : 'date', 'placeholder': 'Ngày bảo trì'}),
            'mota': forms.TextInput(attrs={'placeholder': 'Mô tả'}),
            'chiphi': forms.TextInput(attrs={'placeholder': 'Chi phí'}),
            'nguoithuchien': forms.TextInput(attrs={'placeholder': 'Người thực hiện'}),
            
        }
    def __init__(self, *args, **kwargs):
        super(nhap_baotri, self).__init__(*args, **kwargs)
        self.fields['matb'].queryset = Thietbi.objects.all()
        self.fields['matb'].label_from_instance = lambda obj: f"{obj.matb} - {obj.tentb}"
        
        
class ForgotPasswordForm(forms.Form):
    email = forms.EmailField(
        label='Email',
        widget=forms.EmailInput(attrs={'class': 'form-control', 'placeholder': 'Nhập email mà bạn đã đăng ký'})
    )
class nhap_dungcu(forms.ModelForm):
    class Meta:
        model = Dungcu
        fields = ['soluong', 'dvt', 'ngaymua', 'giamua']
        widgets = {
            'soluong': forms.TextInput(attrs={'placeholder': 'Số lượng'}),
            'dvt': forms.TextInput(attrs={'placeholder': 'Đơn vị tính'}),
            'ngaymua': forms.DateInput(attrs={'type': 'date', 'placeholder': 'Ngày mua'}),
            'giamua': forms.TextInput(attrs={'placeholder': 'Giá mua'}),
        }
class nhap_luongnhanvien(forms.ModelForm):
    class Meta:
        model = Bangluong
        fields = ['manv', 'thangluong', 'luongcoban']
        widgets = {
            'manv': forms.Select(attrs={'placeholder': 'Chọn nhân viên'}), 
            'thangluong': forms.DateInput(attrs={'type': 'date'}),
            'luongcoban': forms.TextInput(attrs={'placeholder': 'Lương cơ bản'}),
        }

    def __init__(self, *args, **kwargs):
        super(nhap_luongnhanvien, self).__init__(*args, **kwargs)
        self.fields['manv'].queryset = Nhanvien.objects.all()
        self.fields['manv'].label_from_instance = lambda obj: f"{obj.manv} - {obj.hoten}"

class nhap_nghiphep(forms.ModelForm):
    class Meta:
        model = Nghiphep
        fields = ['manv', 'ngaybd', 'ngaykt', 'lydonghi', 'trangthai']
        widgets = {
            'manv': forms.Select(attrs={'placeholder': 'Chọn nhân viên'}), 
            'ngaybd': forms.DateInput(attrs={'type': 'date', 'placeholder': 'Ngày bắt đầu'}),
            'ngaykt': forms.DateInput(attrs={'type': 'date', 'placeholder': 'Ngày kết thúc'}),
            'lydonghi': forms.TextInput(attrs={'placeholder': 'Lý do nghỉ'}),
            'trangthai': forms.TextInput(attrs={'placeholder': 'Trạng thái'}),
        }
    def __init__(self, *args, **kwargs):
        super(nhap_nghiphep, self).__init__(*args, **kwargs)
        self.fields['manv'].queryset = Nhanvien.objects.all()
        self.fields['manv'].label_from_instance = lambda obj: f"{obj.manv} - {obj.hoten}"
class nhap_thietbi(forms.ModelForm):
    class Meta:
        model = Thietbi
        fields = ['tentb', 'loaitb', 'soluong', 'tinhtrang', 'ngaymua', 'giamua']
        widgets = {
            'tentb': forms.TextInput(attrs={'placeholder': 'Tên thiết bị'}),
            'loaitb': forms.TextInput(attrs={'placeholder': 'Loại thiết bị'}),
            'soluong': forms.TextInput(attrs={'placeholder': 'Số lượng'}),
            'tinhtrang': forms.TextInput(attrs={'placeholder': 'Tình trạng'}),
            'ngaymua': forms.DateInput(attrs={'type': 'date', 'placeholder': 'Ngày mua'}),
            'giamua': forms.TextInput(attrs={'placeholder': 'Giá mua'}),
        }
class nhap_nhanvien(forms.ModelForm):
    class Meta:
        model = Nhanvien
        fields = ['hoten', 'ngaysinh', 'gioitinh',  'sdt', 'diachi', 'ngayvaolam', 'vitricongviec', 'trangthai']
        widgets = {
            'hoten': forms.TextInput(attrs={'placeholder': 'Họ tên', 'class': 'form-control'}),
            'ngaysinh': forms.DateInput(attrs={'type': 'date', 'class': 'form-control'}),
            'gioitinh': forms.Select(choices=Nhanvien.GENDER_CHOICES),
            'sdt': forms.TextInput(attrs={'placeholder': 'Số điện thoại', 'class': 'form-control'}),
            'diachi': forms.TextInput(attrs={'placeholder': 'Địa chỉ', 'class': 'form-control'}),
            'ngayvaolam': forms.DateInput(attrs={'type': 'date', 'class': 'form-control'}),
            'vitricongviec': forms.TextInput(attrs={'placeholder': 'Vị trí công việc', 'class': 'form-control'}),
            'trangthai': forms.TextInput(attrs={'placeholder': 'Trạng thái', 'class': 'form-control'}),
        }
    
class nhap_thongtinnguyenlieu(forms.ModelForm):
    class Meta:
        model = Thongtinnguyenlieu
        fields = ['tennl', 'gia', 'dvt', 'soluong', 'ngayhethan']
        widgets = {
            'tennl': forms.TextInput(attrs={'placeholder': 'Tên nguyên liệu'}),
            'gia': forms.TextInput(attrs={'placeholder': 'Giá'}),
            'dvt': forms.TextInput(attrs={'placeholder': 'Đơn vị tính'}),
            'soluong': forms.TextInput(attrs={'placeholder': 'Số lượng'}),
            'ngayhethan': forms.DateInput(attrs={'type': 'date', 'placeholder': 'Ngày hết hạn'}),
        }
    
class nhap_khonguyenlieu(forms.ModelForm):
    class Meta:
        model = Thongtinnguyenlieu
        fields = ['manl', 'tennl', 'dvt', 'soluong']
        widgets = {
            'manl': forms.TextInput(attrs={'placeholder': 'Mã nguyên liệu'}),
            'tennl': forms.TextInput(attrs={'placeholder': 'Tên nguyên liệu'}),
            'dvt': forms.TextInput(attrs={'placeholder': 'Đơn vị tính'}),
            'soluong': forms.TextInput(attrs={'placeholder': 'Số lượng'}),
        }
        
        
        
class nhap_nguyenlieu(forms.ModelForm):
    class Meta:
        model = Thongtinnguyenlieu
        fields = ['manl', 'tennl', 'gia', 'ngayhethan']
        widgets = {
            'manl': forms.TextInput(attrs={'placeholder': 'Mã nguyên liệu'}),
            'tennl': forms.TextInput(attrs={'placeholder': 'Tên nguyên liệu'}),
            'gia': forms.TextInput(attrs={'placeholder': 'Giá'}),
            'ngayhethan': forms.DateInput(attrs={'type': 'date', 'placeholder': 'Ngày hết hạn'}),
        }
             
