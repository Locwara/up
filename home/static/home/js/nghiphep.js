document.addEventListener('DOMContentLoaded', () =>{
    const btnntt = document.getElementById('tcl');
    const btndong = document.getElementById('dong');
    const form = document.getElementById('form_nghiphep_ntt');
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
    const form_import = document.getElementById('form_import_nghiphep');
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

document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    const deleteButtons = document.querySelectorAll('.nut-xoa');
    const cancelButtons = document.querySelectorAll('.nut-huy');


    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
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
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            const form = document.getElementById(`form-xoa-${id}`);
            form.style.display = 'none';
            overlay.style.display = 'none';
        });
    });


    overlay.addEventListener('click', function() {
        document.querySelectorAll('.xoa-form').forEach(form => {
            form.style.display = 'none';
        });
        overlay.style.display = 'none';
    });
});
document.addEventListener('DOMContentLoaded', function(){
       
    const nutSua = document.querySelectorAll('.sua');
    const popup = document.getElementById('form_nghiphep_sua');
    const closeBtn = document.querySelector('.dongsua');
    const form = document.getElementById('form_sua');


    nutSua.forEach(button => {
        button.addEventListener('click', function() {

            const manp = this.getAttribute('data-id');

            let ngaybd = this.getAttribute('data-ngaybd');
            let ngaykt = this.getAttribute('data-ngaykt');
            const lydonghi = this.getAttribute('data-lydonghi');
            const trangthai = this.getAttribute('data-trangthai');
            if(ngaybd) {
                const dateObj = new Date(ngaybd);
                ngaybd = dateObj.toISOString().split('T')[0];
            }
            if(ngaykt) {
                const dateObj = new Date(ngaykt);
                ngaykt = dateObj.toISOString().split('T')[0];
            }

            document.getElementById('manp').value = manp;

            document.getElementById('ngaybd').value = ngaybd;
            document.getElementById('ngaykt').value = ngaykt;
            document.getElementById('lydonghi').value = lydonghi;
            document.getElementById('trangthai').value = trangthai;


            const form = document.getElementById('form_sua');
            form.action = `/sua_nghiphep/${manp}/`;
            popup.style.display = 'block';
        });
    });


    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });


    window.addEventListener('click', function(e) {
        if (e.target == popup) {
            popup.style.display = 'none';
        }
    });
})