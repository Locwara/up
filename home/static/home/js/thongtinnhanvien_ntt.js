document.addEventListener('DOMContentLoaded', () => {
    const btnntt = document.getElementById('ttt'); // Nút Thêm nhân viên
    const btndong = document.getElementById('dong'); // Nút đóng (X) của form
    const form = document.getElementById('formtt'); // Form cần hiển thị hoặc ẩn
    let form_open = false; // Biến kiểm tra trạng thái form

    btnntt.addEventListener('click', () =>{
        if(!form_open){
            form.style.display = 'block';
            form_open = true;
        }else{
            form.style.display = 'none';
            form_open = false;
        }
    });
    


    btndong.addEventListener('click', () => {
        form.style.display = 'none';
        form_open = false;
    })
    const btnimport = document.getElementById('import');
    const btndongimport = document.getElementById('dongimport');
    const form_import = document.getElementById('form_import_thongtinnhanvien');
    let form_import_open = false;

    btnimport.addEventListener('click', () =>{
        if(!form_import_open){
            form_import.style.display = 'block';
            form_import_open = true;
        }else{
            form_import.style.display = 'none';
            form_import_open = false;
        }
    });

    btndongimport.addEventListener('click', () =>{
        form_import.style.display = 'none';
        form_import_open = false;
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    const deleteButtons = document.querySelectorAll('.nut-xoa');
    const cancelButtons = document.querySelectorAll('.nut-huy');


    deleteButtons.forEach(button => {
        button.addEventListener('click', function () {
            const id = this.getAttribute('data-id');
            const form = document.getElementById(`form-xoa-${id}`);


            document.querySelectorAll('.xoa-form').forEach(f => {
                if (f !== form) {
                    f.style.display = 'none';
                }
            });


            form.style.display = 'block';
            overlay.style.display = 'block';
        });
    });

    cancelButtons.forEach(button => {
        button.addEventListener('click', function () {
            const id = this.getAttribute('data-id');
            const form = document.getElementById(`form-xoa-${id}`);
            form.style.display = 'none';
            overlay.style.display = 'none';
        });
    });


    overlay.addEventListener('click', function () {
        document.querySelectorAll('.xoa-form').forEach(form => {
            form.style.display = 'none';
        });
        overlay.style.display = 'none';
    });
});
document.addEventListener('DOMContentLoaded', function () {
        
    const nutSua = document.querySelectorAll('.sua');
    const popup = document.getElementById('form_nhanvien_sua');
    const closeBtn = document.querySelector('.dongsua');
    const form = document.getElementById('form_sua');


    nutSua.forEach(button => {
        button.addEventListener('click', function () {
            const manv = this.getAttribute('data-id');
            const hoten = this.getAttribute('data-hoten');
            let ngaysinh = this.getAttribute('data-ngaysinh');
            const sdt = this.getAttribute('data-sdt');
            const diachi = this.getAttribute('data-diachi');
            let ngayvaolam = this.getAttribute('data-ngayvaolam');
            const vitricongviec = this.getAttribute('data-vitricongviec');
            const trangthai = this.getAttribute('data-trangthai');
    

            if(ngaysinh) {
                const dateObj = new Date(ngaysinh);
                ngaysinh = dateObj.toISOString().split('T')[0];
            }
            
            if(ngayvaolam) {
                const dateObj = new Date(ngayvaolam);
                ngayvaolam = dateObj.toISOString().split('T')[0];
            }
    
            document.getElementById('manv').value = manv;
            document.getElementById('hoten').value = hoten;
            document.getElementById('ngaysinh').value = ngaysinh;
            document.getElementById('sdt').value = sdt;
            document.getElementById('diachi').value = diachi;
            document.getElementById('ngayvaolam').value = ngayvaolam;
            document.getElementById('vitricongviec').value = vitricongviec;
            document.getElementById('trangthai').value = trangthai;
    
            const form = document.getElementById('form_sua');
            form.action = `/sua_thongtinnhanvien/${manv}/`;
            popup.style.display = 'block';
        });
    });


    closeBtn.addEventListener('click', function () {
        popup.style.display = 'none';
    });


    window.addEventListener('click', function (e) {
        if (e.target == popup) {
            popup.style.display = 'none';
        }
    });
    
})