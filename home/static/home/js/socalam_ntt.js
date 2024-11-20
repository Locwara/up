document.addEventListener('DOMContentLoaded', () => {
    const btnntt = document.getElementById('tcl');
    const btndong = document.getElementById('dong');
    const form = document.getElementById('form_calam_ntt');
    let form_open = false;

    btnntt.addEventListener('click', () => {
        if (!form_open) {
            form.style.display = 'block';
            form_open = true;
        } else {
            form.style.display = 'none';
            form_open = false;
        }
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
    btndong.addEventListener('click', () => {
        form.style.display = 'none';
        form_open = false;
    });
    const btnimport = document.getElementById('import');
    const btndongimport = document.getElementById('dongimport');
    const form_import = document.getElementById('form_import_calam');
    let form_import_open = false;

    btnimport.addEventListener('click', () => {
        if (!form_import_open) {
            form_import.style.display = 'block';
            form_import_open = true;
        } else {
            form_import.style.display = 'none';
            form_import_open = false;
        }
    });

    btndongimport.addEventListener('click', () => {
        form_import.style.display = 'none';
        form_import_open = false;
    });
});

document.addEventListener('DOMContentLoaded', function () {

    const nutSua = document.querySelectorAll('.sua');
    const popup = document.getElementById('form_calam_sua');
    const closeBtn = document.querySelector('.dongsua');
    const form = document.getElementById('form_sua');


    nutSua.forEach(button => {
        button.addEventListener('click', function () {
            const macalam = this.getAttribute('data-id');

            let ngay = this.getAttribute('data-ngay');
            let giobd = this.getAttribute('data-giobd'); 
            let giokt = this.getAttribute('data-giokt'); 
    
            if(ngay) {
                const dateObj = new Date(ngay);
                ngay = dateObj.toISOString().split('T')[0];
            }
    
            
            document.getElementById('macalam').value = macalam;

            document.getElementById('ngay').value = ngay;
            document.getElementById('giobd').value = giobd;
            document.getElementById('giokt').value = giokt;
    

    
            const form = document.getElementById('form_sua');
            form.action = `/sua_calam/${macalam}/`;
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


    const filterBtn = document.querySelector('.loc-nut');
    const dateFilter = document.querySelector('.date-filter');
    const startDate = document.getElementById('ngaybatdau');
    const endDate = document.getElementById('ngayketthuc');
    const tableRows = document.querySelectorAll('#maintenanceTableBody tr[data-date]');

   
    filterBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        dateFilter.classList.toggle('show');
    });


    document.addEventListener('click', function (e) {
        if (!dateFilter.contains(e.target) && !filterBtn.contains(e.target)) {
            dateFilter.classList.remove('show');
        }
    });


    dateFilter.addEventListener('click', function (e) {
        e.stopPropagation();
    });

    function filterTable() {
        const start = startDate.value;
        const end = endDate.value;

        if (!start || !end) return;

        tableRows.forEach(row => {
            const rowDate = row.getAttribute('data-date');
            if (rowDate >= start && rowDate <= end) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
               }
        });


        filterBtn.innerHTML = `Từ ${start} đến ${end} <i class="ti-angle-down"></i>`;
    }

    startDate.addEventListener('change', filterTable);
    endDate.addEventListener('change', filterTable);
})

