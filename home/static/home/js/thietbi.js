document.addEventListener('DOMContentLoaded', () =>{
    const btnntt = document.getElementById('tcl');
    const btndong = document.getElementById('dong');
    const form = document.getElementById('form_thietbi_ntt');
    let form_open = false;

    btnntt.addEventListener('click', () =>{
        if(!form_open){
            form.style.display = 'block';
            form_open = true;
        }else{
            form.style.display = 'none';
            form_open = false;
        }
    });

    btndong.addEventListener('click', () =>{
        form.style.display = 'none';
        form_open = false;
    });
    const btnimport = document.getElementById('import');
    const btndongimport = document.getElementById('dongimport');
    const form_import = document.getElementById('form_import_thietbi');
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
    const popup = document.getElementById('form_thietbi_sua');
    const closeBtn = document.querySelector('.dongsua');
    const form = document.getElementById('form_sua');


    nutSua.forEach(button => {
        button.addEventListener('click', function () {

            const matb = this.getAttribute('data-id');
            const tentb = this.getAttribute('data-tentb');
            const loaitb = this.getAttribute('data-loaitb');
            const soluong = this.getAttribute('data-soluong');
            const tinhtrang = this.getAttribute('data-tinhtrang');
            let ngaymua = this.getAttribute('data-ngaymua');
            const giamua = this.getAttribute('data-giamua');

            if(ngaymua) {
                const dateObj = new Date(ngaymua);
                ngaymua = dateObj.toISOString().split('T')[0];
            }
            document.getElementById('matb').value = matb;
            document.getElementById('tentb').value = tentb;
            document.getElementById('loaitb').value = loaitb;
            document.getElementById('soluong').value = soluong;
            document.getElementById('tinhtrang').value = tinhtrang;
            document.getElementById('ngaymua').value = ngaymua;
            document.getElementById('giamua').value = giamua;


            const form = document.getElementById('form_sua');
            form.action = `/sua_thietbi/${matb}/`;
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