
$(document).ready(function () {

    $("#applyForm").validate({
        rules: {
            nameSurname: "required",
            tel: {
                required: true,
                minlength: 16
            },
            email: {
                required: true,
                email: true
            },
            gender: "required",
            nationality: "required",
            country: "required",
            studentNo: "required",
            universityName: "required",
            departmentName: "required",
            className: "required",
            otherUniversity: "required",
            otherDepartment: "required",
            IdentityPassport: "required",
            educationName: "required",
            EducationStatus: "required",
            StartEducationDate: {
                required: true,
                maxDate: true,
                minDate: true,
            },
            FinishEducationDate: {
                required: true,
                maxDate: true,
                minDate: true,
            },
            // StartEducationDate: "required",
            // FinishEducationDate: "required",
            MasterUniversityName: "required",
            MasterDepartmentName: "required",
            MasterOtherUniversity: "required",
            tcNo: "required",
            PassportName: "required",
            otherNationalityName: "required",
            CurrentMasterUniversityName: "required",
            DoctorateUniversityName: "required",
            DoctorateDepartmentName: "required",
            DoctorateOtherUniversity: "required",
            CurrenttDoctorateUniversityName: "required",
            CurrentDoctorateOtherUniversity: "required",
            DoctorateOtherDepartment: "required",
            CurrentDoctorateDepartmentName: "required",
            CurrentDoctorateOtherDepartment: "required",
            DoctorateClassName: "required",
            otherUniversity: "required",
            CurrentMasterOtherUniversity: "required",
            MasterOtherDepartment: "required",
            CurrentMasterDepartmentName: "required",
            BachelorDepartmentName: "required",
            MasterClassName: "required",
            className: "required",
            BachelorFaculty: "required",
            MasterFaculty: "required",
            DoctorateFaculty: "required",
            CurrentMasterOtherDepartment: "required",
            city: "required",
            BachelorUniCity: "required",
            DoctorateUniCity: "required",
            MasterUniCity: "required",
            DoctorateBachelorOtherUniversityName: "required",
            DoctorateBachelorUniversityName: "required",
            DoctorateBachelorDepartmentName: "required",
            DoctorateBachelorOtherDepartmentName: "required",
            TurkeyCity:"required",
            MasterBachelorGrade:"required",
            DoctorateBachelorGrade:"required",
            DoctorateGrade:"required",
            OtherBachelorUniCity:"required",
            OtherMasterUniCity:"required",
            OtherDoctorateUniCity:"required"
        },

        messages: {
            nameSurname: "Ad-Soyad Gerekli!",
            tel: {
                required: "Telefon Gerekli!",
                minlength: "Telefon numarası 11 haneli olmalı!",
            },
            email: {
                required: "Email adresi Gerekli!",
                email: "Geçersiz email adresi!"
            },
            universityName: "Üniversite seçiniz!",
            gender: "Cinsiyet Gerekli!",
            nationality: "Uyruk Gerekli!",
            studentNo: "Öğrenci Numarası Gerekli!",
            country: "Ülke Gerekli!",
            grade4: "Lütfen 4'lük Not Giriniz!",
            grade100: "Lütfen 100'lük Not Giriniz!",
            grade: "Not Ortalamanızı Giriniz!",
            departmentName: "Bölüm seçiniz!",
            className: "Sınıf seçiniz!",
            otherUniversity: "Üniversite Gerekli!!",
            otherDepartment: "Bölüm Gerekli!!",
            educationName: "Eğitim Durumunuz Gerekli!",
            IdentityPassport: "Lütfen Seçim Yapınız!",
            educationName: "Lütfen Seçim Yapınız!",
            EducationStatus: "Lütfen Seçim Yapınız!",
            StartEducationDate: {
                required: "Lütfen Tarih Seçiniz",
                maxDate: "2022-01-01'den küçük bir değer giriniz",
                minDate: "1999-01-01'den büyük bir değer giriniz",
            },
            FinishEducationDate: {
                required: "Lütfen Tarih Seçiniz",
                maxDate: "2025-01-01'den küçük bir değer giriniz",
                minDate: "1999-01-01'den büyük bir değer giriniz",
            },
            // StartEducationDate: "Lütfen Tarih Seçiniz",
            // FinishEducationDate: "Lütfen Tarih Seçiniz",
            MasterUniversityName: "Lütfen Seçim Yapınız",
            MasterDepartmentName: "Lütfen Seçim Yapınız",
            MasterOtherUniversity: "Üniversite Gerekli!",
            tcNo: "Kimlik Numarası Gerekli!",
            PassportName: "Pasaport Numarası Gerekli",
            otherNationalityName: "Uyruk Gerekli!",
            CurrentMasterUniversityName: "Üniversite Gerekli!",
            DoctorateUniversityName: "Üniversite Gerekli!",
            DoctorateDepartmentName: "Bölüm Gerekli!",
            DoctorateOtherUniversity: "Üniversite Gerekli!",
            CurrenttDoctorateUniversityName: "Üniversite Gerekli!",
            CurrentDoctorateOtherUniversity: "Üniversite Gerekli!",
            DoctorateOtherDepartment: "Bölüm Gerekli!",
            CurrentDoctorateDepartmentName: "Bölüm Gerekli!",
            CurrentDoctorateOtherDepartment: "Bölüm Gerekli!",
            DoctorateClassName: "Sınıf Seçiniz!",
            otherUniversity: "Bölüm Seçiniz!",
            CurrentMasterOtherUniversity: "Üniversite Gerekli!",
            MasterOtherDepartment: "Bölüm Gerekli!",
            CurrentMasterDepartmentName: "Bölüm Gerekli!",
            BachelorDepartmentName: "Bölüm Gerekli!",
            MasterClassName: "Sınıf Seçiniz!",
            className: "Sınıf Seçiniz!",
            BachelorFaculty: "Fakülte Giriniz!",
            MasterFaculty: "Fakülte Giriniz!",
            DoctorateFaculty: "Fakülte Giriniz!",
            CurrentMasterOtherDepartment: "Bölüm Gerekli!",
            city: "Şehir Gerekli!",
            BachelorUniCity: "Şehir Gerekli!",
            DoctorateUniCity: "Şehir Gerekli!",
            MasterUniCity: "Şehir Gerekli!",
            DoctorateBachelorOtherUniversityName: "Üniversite Gerekli!",
            DoctorateBachelorUniversityName: "Üniversite Gerekli!",
            DoctorateBachelorDepartmentName: "Bölüm Gerekli!",
            DoctorateBachelorOtherDepartmentName: "Bölüm Gerekli!",
            TurkeyCity:"Şehir Seçiniz!",
            MasterBachelorGrade:"Not Giriniz!",
            DoctorateBachelorGrade:"Not Giriniz!",
            DoctorateGrade:"Not Giriniz!",
            OtherBachelorUniCity:"Şehir Gerekli!",
            OtherMasterUniCity:"Şehir Gerekli",
            OtherDoctorateUniCity:"Şehir Gerekli"

        },
        submitHandler: function (form) {
            form.submit();
        }
    });

    $('.customer-logos').slick({

        slidesToShow: 6,

        slidesToScroll: 1,

        autoplay: true,

        autoplaySpeed: 1500,

        arrows: false,

        dots: false,

        pauseOnHover: false,

        responsive: [{

            breakpoint: 768,

            settings: {

                slidesToShow: 4

            }

        }, {

            breakpoint: 520,

            settings: {

                slidesToShow: 3

            }

        }]

    });

    var star1_ = "";
    var star2_ = "";
    var gradeType = "grade";

    function isNumericInputPhone(event) {
        var key = event.keyCode;
        return ((key >= 48 && key <= 57) || // Allow number line
            (key >= 96 && key <= 105) // Allow number pad
        );
    };

    function isModifierKey(event) {
        var key = event.keyCode;
        return (event.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
            (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
            (key > 36 && key < 41) || // Allow left, up, right, down
            (
                (event.ctrlKey === true || event.metaKey === true) &&
                (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
            )
    };

    function enforceFormat(event) {
        if (!isNumericInputPhone(event) && !isModifierKey(event)) {
            event.preventDefault();
        }
    };

    function formatToPhone(event) {
        if (isModifierKey(event)) {
            return;
        }
        var target = event.target;
        var input = event.target.value.replace(/\D/g, '').substring(0, 10);
        var zip = input.substring(0, 3);
        var middle = input.substring(3, 6);
        var last = input.substring(6, 10);
        if (zip.charAt(0) === "0") {
            target.value = ``;
        } else if (!(zip.charAt(0) === "(" || zip.charAt(0) === "5")) {
            target.value = ``;
        } else if (input.length > 6) {
            target.value = `(${zip}) ${middle} - ${last}`;
        } else if (input.length > 3) {
            target.value = `(${zip}) ${middle}`;
        } else if (input.length > 0) {
            target.value = `(${zip}`;
        }

    };

    function TCNOKontrol(TCNO) {
        var tek = 0,
            cift = 0,
            sonuc = 0;

        if (TCNO.length != 11) return false;
        if (isNaN(TCNO)) return false;
        if (TCNO[0] == 0) return false;

        tek = parseInt(TCNO[0]) + parseInt(TCNO[2]) + parseInt(TCNO[4]) + parseInt(TCNO[6]) + parseInt(TCNO[8]);
        cift = parseInt(TCNO[1]) + parseInt(TCNO[3]) + parseInt(TCNO[5]) + parseInt(TCNO[7]);

        tek = tek * 7;
        sonuc = Math.abs(tek - cift);
        if (sonuc % 10 != TCNO[9]) return false;
        if (TCNO === "11111111111") return false;
        return true;
    }

    $(document).on("keydown", "#tel", function (e) {
        enforceFormat(e);
    });

    $(document).on("keyup", "#tel", function (e) {
        formatToPhone(e);
    });

    function MailKontrol(email) {
        var kontrol = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        return kontrol.test(email);
    };

    $('input[type=radio][name=selectGrade]').change(function () {
        if (this.value == "4'lük Sistem") {
            gradeType = "4'lük Sistem";
        } else if (this.value == "100'lük Sistem") {
            gradeType = "100'lük Sistem";
        }
    });

    $('#universityName').change(function () {
        if (this.value == 'BachelorOtherSelect') {
            $("#otherUniversity-Area").show("slow");
            $("#otherUniversity").prop('required', true);
        } else {
            $("#otherUniversity-Area").hide(100);
            $("#otherUniversity").prop('required', false);
            $("#otherUniversity").val("");
        }
    });

    $('#educationName').change(function () {
        if (this.value == 'Lisans') {
            $("#university-Area").show("slow");
            $("#universityName").prop('required', true);
        } else {
            $("#university-Area").hide(100);
            $("#universityName").prop('required', false);
            $("#universityName").val("");
        }
    });

    $('#educationName').change(function () {
        if (this.value == 'Yüksek Lisans') {
            $("#MasterUniversity-Area").show("slow");
            $("#MasterUniversityName").prop('required', true);
        } else {
            $("#MasterUniversity-Area").hide(100);
            $("#MasterUniversityName").prop('required', false);
            $("#MasterUniversityName").val("");
        }
    });

    $('#educationName').change(function () {
        if (this.value == 'Yüksek Lisans') {
            $("#CurrentMasterUniversity-Area").show("slow");
            $("#CurrentMasterUniversityName").prop('required', true);
        } else {
            $("#CurrentMasterUniversity-Area").hide(100);
            $("#CurrentMasterUniversityName").prop('required', false);
            $("#CurrentMasterUniversityName").val("");
        }
    });

    $('#MasterUniversityName').change(function () {
        if (this.value == 'MasterOtherUniversity') {
            $("#MasterOtherUniversity-Area").show("slow");
            $("#MasterOtherUniversity").prop('required', true);
        } else {
            $("#MasterOtherUniversity-Area").hide(100);
            $("#MasterOtherUniversity").prop('required', false);
            $("#MasterOtherUniversity").val("");
        }
    });

    $('#CurrentMasterUniversityName').change(function () {
        if (this.value == 'CurrentMasterOtherUniversity') {
            $("#CurrentMasterOtherUniversity-Area").show("slow");
            $("#CurrentMasterOtherUniversity").prop('required', true);
        } else {
            $("#CurrentMasterOtherUniversity-Area").hide(100);
            $("#CurrentMasterOtherUniversity").prop('required', false);
            $("#CurrentMasterOtherUniversity").val("");
        }
    });

    $('#BachelorDepartmentName').change(function () {
        if (this.value == 'bachelorOtherDepartment') {
            $("#BachelorOtherDepartment-Area").show("slow");
            $("#BachelorOtherDepartment").prop('required', true);
        } else {
            $("#BachelorOtherDepartment-Area").hide(100);
            $("#BachelorOtherDepartment").prop('required', false);
            $("#BachelorOtherDepartment").val("");
        }
    });

    $('#MasterDepartmentName').change(function () {
        if (this.value == 'MasterOtherDepartment') {
            $("#MasterOtherDepartmentName-Area").show("slow");
            $("#MasterOtherDepartment").prop('required', true);
        } else {
            $("#MasterOtherDepartmentName-Area").hide(100);
            $("#MasterOtherDepartment").prop('required', false);
            $("#MasterOtherDepartment").val("");
        }
    });

    $('#CurrentMasterDepartmentName').change(function () {
        if (this.value == 'CurrentMasterOtherDepartment') {
            $("#CurrentMasterOtherDepartmentName-Area").show("slow");
            $("#CurrentMasterOtherDepartment").prop('required', true);
        } else {
            $("#CurrentMasterOtherDepartmentName-Area").hide(100);
            $("#CurrentMasterOtherDepartment").prop('required', false);
            $("#CurrentMasterOtherDepartment").val("");
        }
    });

    $('#DoctorateUniversityName').change(function () {
        if (this.value == 'DoctorateOtherUniversityName') {
            $("#DoctorateOtherUniversity-Area").show("slow");
            $("#DoctorateOtherUniversity").prop('required', true);
        } else {
            $("#DoctorateOtherUniversity-Area").hide(100);
            $("#DoctorateOtherUniversity").prop('required', false);
            $("#DoctorateOtherUniversity").val("");
        }
    });

    $('#DoctorateBachelorDepartmentName').change(function () {
        if (this.value == 'DoctorateBachelorOtherDepartment') {
            $("#DoctorateBachelorOtherDepartment-Area").show("slow");
            $("#DoctorateBachelorOtherDepartmentName").prop('required', true);
        } else {
            $("#DoctorateBachelorOtherDepartment-Area").hide(100);
            $("#DoctorateBachelorOtherDepartmentName").prop('required', false);
            $("#DoctorateBachelorOtherDepartmentName").val("");
        }
    });

    $('#DoctorateBachelorUniversityName').change(function () {
        if (this.value == 'DoctorateBachelorOtherUniversity') {
            $("#DoctorateBachelorOtherUniversity-Area").show("slow");
            $("#DoctorateBachelorOtherUniversityName").prop('required', true);
        } else {
            $("#DoctorateBachelorOtherUniversity-Area").hide(100);
            $("#DoctorateBachelorOtherUniversityName").prop('required', false);
            $("#DoctorateBachelorOtherUniversityName").val("");
        }
    });

    $('#CurrenttDoctorateUniversityName').change(function () {
        if (this.value == 'CurrenttDoctorateOtherUniversityName') {
            $("#CurrentDoctorateOtherUniversity-Area").show("slow");
            $("#CurrentDoctorateOtherUniversity").prop('required', true);
        } else {
            $("#CurrentDoctorateOtherUniversity-Area").hide(100);
            $("#CurrentDoctorateOtherUniversity").prop('required', false);
            $("#CurrentDoctorateOtherUniversity").val("");
        }
    });

    $('#CurrentDoctorateDepartmentName').change(function () {
        if (this.value == 'CurrentDoctorateOtherDepartment') {
            $("#CurrentDoctorateOtherDepartment-Area").show("slow");
            $("#CurrentDoctorateOtherDepartment").prop('required', true);
        } else {
            $("#CurrentDoctorateOtherDepartment-Area").hide(100);
            $("#CurrentDoctorateOtherDepartment").prop('required', false);
            $("#CurrentDoctorateOtherDepartment").val("");
        }
    });

    $('#DoctorateDepartmentName').change(function () {
        if (this.value == 'DoctorateOtherDepartment') {
            $("#DoctorateOtherDepartment-Area").show("slow");
            $("#DoctorateOtherDepartment").prop('required', true);
        } else {
            $("#DoctorateOtherDepartment-Area").hide(100);
            $("#DoctorateOtherDepartment").prop('required', false);
            $("#DoctorateOtherDepartment").val("");
        }
    });

    $('#DoctorateUniCity').change(function () {
        if (this.value == 'DigerDoctorateUniŞehri') {
            $("#OtherDoctorateUniCity-Area").show("slow");
            $("#OtherDoctorateUniCity").prop('required', true);
        } else {
            $("#OtherDoctorateUniCity-Area").hide(100);
            $("#OtherDoctorateUniCity").prop('required', false);
            $("#OtherDoctorateUniCity").val("");
        }
    });
    $('#MasterUniCity').change(function () {
        if (this.value == 'DigerMasterUniŞehri') {
            $("#OtherMasterUniCity-Area").show("slow");
            $("#OtherMasterUniCity").prop('required', true);
        } else {
            $("#OtherMasterUniCity-Area").hide(100);
            $("#OtherMasterUniCity").prop('required', false);
            $("#OtherMasterUniCity").val("");
        }
    });

    $('#BachelorUniCity').change(function () {
        if (this.value == 'DigerBachelorUniŞehri') {
            $("#OtherBachelorUniCity-Area").show("slow");
            $("#OtherBachelorUniCity").prop('required', true);
        } else {
            $("#OtherBachelorUniCity-Area").hide(100);
            $("#OtherBachelorUniCity").prop('required', false);
            $("#OtherBachelorUniCity").val("");
        }
    });

    $('#educationName').change(function () {
        if (this.value == 'Doktora') {
            $("#DoctorateUniversity-Area").show("slow");
            $("#DoctorateUniversityName").prop('required', true);
        } else {
            $("#DoctorateUniversity-Area").hide(100);
            $("#DoctorateUniversityName").prop('required', false);
            $("#DoctorateUniversityName").val("");
        }
    });

    $('#educationName').change(function () {
        if (this.value == 'Doktora') {
            $("#DoctorateBachelorDepartmentName-Area").show("slow");
            $("#DoctorateBachelorDepartmentName").prop('required', true);
        } else {
            $("#DoctorateBachelorDepartmentName-Area").hide(100);
            $("#DoctorateBachelorDepartmentName").prop('required', false);
            $("#DoctorateBachelorDepartmentName").val("");
        }
    });

    $('#educationName').change(function () {
        if (this.value == 'Doktora') {
            $("#DoctorateBachelorGrade-Area").show("slow");
            $("#DoctorateBachelorGrade").prop('required', true);
        } else {
            $("#DoctorateBachelorGrade-Area").hide(100);
            $("#DoctorateBachelorGrade").prop('required', false);
            $("#DoctorateBachelorGrade").val("");
        }
    });
    
    $('#educationName').change(function () {
        if (this.value == 'Doktora') {
            $("#DoctorateGrade-Area").show("slow");
            $("#DoctorateGrade").prop('required', true);
        } else {
            $("#DoctorateGrade-Area").hide(100);
            $("#DoctorateGrade").prop('required', false);
            $("#DoctorateGrade").val("");
        }
    });

    $('#educationName').change(function () {
        if (this.value == 'Yüksek Lisans') {
            $("#MasterBachelorGrade-Area").show("slow");
            $("#MasterBachelorGrade").prop('required', true);
        } else {
            $("#MasterBachelorGrade-Area").hide(100);
            $("#MasterBachelorGrade").prop('required', false);
            $("#MasterBachelorGrade").val("");
        }
    });

    $('#educationName').change(function () {
        if (this.value == 'Lisans') {
            $("#BachelorUniCity-Area").show("slow");
            $("#BachelorUniCity").prop('required', true);
        } else {
            $("#BachelorUniCity-Area").hide(100);
            $("#BachelorUniCity").prop('required', false);
            $("#BachelorUniCity").val("");
        }
    });
    $('#country').change(function () {
        if (this.value == 'Türkiye') {
            $("#TurkeyCity-Area").show("slow");
            $("#TurkeyCity").prop('required', true);
        } else {
            $("#TurkeyCity-Area").hide(100);
            $("#TurkeyCity").prop('required', false);
            $("#TurkeyCity").val("");
        }
    });

    $('#country').change(function () {
        if (this.value == 'Türkiye') {
            $("#city-Area").hide(100);
            $("#city").prop('required', true);
        } else {
            $("#city-Area").show("slow");
            $("#city").prop('required', true);
        }
    });
    $('#educationName').change(function () {
        if (this.value == 'Yüksek Lisans') {
            $("#MasterUniCity-Area").show("slow");
            $("#MasterUniCity").prop('required', true);
        } else {
            $("#MasterUniCity-Area").hide(100);
            $("#MasterUniCity").prop('required', false);
            $("#MasterUniCity").val("");
        }
    });

    $('#educationName').change(function () {
        if (this.value == 'Doktora') {
            $("#DoctorateUniCity-Area").show("slow");
            $("#DoctorateUniCity").prop('required', true);
        } else {
            $("#DoctorateUniCity-Area").hide(100);
            $("#DoctorateUniCity").prop('required', false);
            $("#DoctorateUniCity").val("");
        }
    });

    $('#educationName').change(function () {
        if (this.value == 'Doktora') {
            $("#DoctorateBachelorUniversity-Area").show("slow");
            $("#DoctorateBachelorUniversityName").prop('required', true);
        } else {
            $("#DoctorateBachelorUniversity-Area").hide(100);
            $("#DoctorateBachelorUniversityName").prop('required', false);
            $("#DoctorateBachelorUniversityName").val("");
        }
    });

    $('#educationName').change(function () {
        if (this.value == 'Lisans') {
            $("#BachelorFaculty-Area").show("slow");
            $("#BachelorFaculty").prop('required', true);
        } else {
            $("#BachelorFaculty-Area").hide(100);
            $("#BachelorFaculty").prop('required', false);
            $("#BachelorFaculty").val("");
        }
    });

    $('#educationName').change(function () {
        if (this.value == 'Yüksek Lisans') {
            $("#MasterFaculty-Area").show("slow");
            $("#MasterFaculty").prop('required', true);
        } else {
            $("#MasterFaculty-Area").hide(100);
            $("#MasterFaculty").prop('required', false);
            $("#MasterFaculty").val("");
        }
    });

    $('#educationName').change(function () {
        if (this.value == 'Doktora') {
            $("#DoctorateFaculty-Area").show("slow");
            $("#DoctorateFaculty").prop('required', true);
        } else {
            $("#DoctorateFaculty-Area").hide(100);
            $("#DoctorateFaculty").prop('required', false);
            $("#DoctorateFaculty").val("");
        }
    });

    $('#educationName').change(function () {
        if (this.value == 'Doktora') {
            $("#CurrentDoctorateDepartmentName-Area").show("slow");
            $("#CurrentDoctorateDepartmentName").prop('required', true);
        } else {
            $("#CurrentDoctorateDepartmentName-Area").hide(100);
            $("#CurrentDoctorateDepartmentName").prop('required', false);
            $("#CurrentDoctorateDepartmentName").val("");
        }
    });

    $('#educationName').change(function () {
        if (this.value == 'Doktora') {
            $("#DoctorateDepartmentName-Area").show("slow");
            $("#DoctorateDepartmentName").prop('required', true);
        } else {
            $("#DoctorateDepartmentName-Area").hide(100);
            $("#DoctorateDepartmentName").prop('required', false);
            $("#DoctorateDepartmentName").val("");
        }
    });

    $('#educationName').change(function () {
        if (this.value == 'Doktora') {
            $("#DoctorateClassName-Area").show("slow");
            $("#DoctorateClassName").prop('required', true);
        } else {
            $("#DoctorateClassName-Area").hide(100);
            $("#DoctorateClassName").prop('required', false);
            $("#DoctorateClassName").val("");
        }
    });

    $('#educationName').change(function () {
        if (this.value == 'Lisans') {
            $("#BachelorDepartmentName-Area").show("slow");
            $("#BachelorDepartmentName").prop('required', true);
        } else {
            $("#BachelorDepartmentName-Area").hide(100);
            $("#BachelorDepartmentName").prop('required', false);
            $("#BachelorDepartmentName").val("");
        }
    });

    $('#educationName').change(function () {
        if (this.value == 'Yüksek Lisans') {
            $("#MasterDepartmentName-Area").show("slow");
            $("#MasterDepartmentName").prop('required', true);
        } else {
            $("#MasterDepartmentName-Area").hide(100);
            $("#MasterDepartmentName").prop('required', false);
            $("#MasterDepartmentName").val("");
        }
    });

    $('#educationName').change(function () {
        if (this.value == 'Yüksek Lisans') {
            $("#CurrentMasterDepartmentName-Area").show("slow");
            $("#CurrentMasterDepartmentName").prop('required', true);
        } else {
            $("#CurrentMasterDepartmentName-Area").hide(100);
            $("#CurrentMasterDepartmentName").prop('required', false);
            $("#CurrentMasterDepartmentName").val("");
        }
    });

    $('#educationName').change(function () {
        if (this.value == 'Lisans') {
            $("#departmentName-Area").show("slow");
            $("#departmentName").prop('required', true);
        } else {
            $("#departmentName-Area").hide(100);
            $("#departmentName").prop('required', false);
            $("#departmentName").val("");
        }
    });

    $('#educationName').change(function () {
        if (this.value == 'Lisans') {
            $("#className-Area").show("slow");
            $("#className").prop('required', true);
        } else {
            $("#className-Area").hide(100);
            $("#className").prop('required', false);
            $("#className").val("");
        }
    });

    $('#educationName').change(function () {
        if (this.value == 'Yüksek Lisans') {
            $("#MasterClassName-Area").show("slow");
            $("#MasterClassName").prop('required', true);
        } else {
            $("#MasterClassName-Area").hide(100);
            $("#MasterClassName").prop('required', false);
            $("#MasterClassName").val("");
        }
    });

    $('#nationality').change(function () {
        if (this.value == 'DigerUyruk') {
            $("#otherNationalityName-Area").show("slow");
            $("#otherNationalityName").prop('required', true);
        } else {
            $("#otherNationalityName-Area").hide(100);
            $("#otherNationalityName").prop('required', false);
            $("#otherNationalityName").val("");
        }
    });

    $('#educationName').change(function () {
        if (this.value == 'Doktora') {
            $("#CurrenttDoctorateUniversity-Area").show("slow");
            $("#CurrenttDoctorateUniversityName").prop('required', true);
        } else {
            $("#CurrenttDoctorateUniversity-Area").hide(100);
            $("#CurrenttDoctorateUniversityName").prop('required', false);
            $("#CurrenttDoctorateUniversityName").val("");
        }
    });

    $('#IdentityPassport').change(function () {
        if (this.value == 'T.C. Kimlik Numarası') {
            $("#tcNo-Area").show("slow");
            $("#tcNo").prop('required', true);
        } else {
            $("#tcNo-Area").hide(100);
            $("#tcNo").prop('required', false);
            $("#tcNo").val("");
        }
    });

    $('#IdentityPassport').change(function () {
        if (this.value == 'Pasaport Numarası') {
            $("#PassportName-Area").show("slow");
            $("#PassportName").prop('required', true);
        } else {
            $("#PassportName-Area").hide(100);
            $("#PassportName").prop('required', false);
            $("#PassportName").val("");
        }
    });

    $('input[type=radio][name=star1]').change(function () {
        star1_ = this.value;
    });

    $('input[type=radio][name=star2]').change(function () {
        star2_ = this.value;
    });

    $('#myTab .nav-link').click(function () {
        if ($(window).width() < 768) {
            $('html, body').animate({
                scrollTop: 6250
            }, 1000);
        }
        else if ($(window).width() > 768) {
            $('html, body').animate({
                scrollTop: 3390
            }, 1000);
        }
    });

    // $('#form-submit-btn').click(function (e) {

    //     var className = $("#className option:selected").text();
    //     var university = $("#university option:selected").text();
    //     var values = $("#applyForm").serialize();

    //     if (gradeType === "4'lük Sistem") {

    //         highSchoolType = "";
    //         highSchoolClass = "";
    //         values += "&highSchoolName=" + encodeURIComponent("");

    //     } else {

    //         className = "";
    //         university = "";
    //         values += "&departmentName=" + encodeURIComponent("");

    //     }

    //     values += "&className=" + encodeURIComponent(className);
    //     values += "&university=" + encodeURIComponent(university);
    //     values += "&gradeType=" + encodeURIComponent(gradeType);
    //     values += "&star1=" + encodeURIComponent(star1_);
    //     values += "&star2=" + encodeURIComponent(star2_);
    //     $("#form-submit-btn").prop("disabled", true);

    //     $.ajax({
    //         type: "POST",
    //         url: "/post.php",
    //         dataType: "json",
    //         data: values

    //     })
    //         .done(function (data) {
    //             console.log(data);
    //             if (data.status === "ok") {
    //                 swal({
    //                     title: 'Kayıt Başarılı!',
    //                     text: data.result,
    //                     icon: 'success'
    //                 }).then(function () {
    //                     location.reload();
    //                 });
    //             } else {
    //                 swal("Uyarı", data.result, "warning");
    //             }
    //             $("#form-submit-btn").prop("disabled", false);
    //         })

    //         .fail(function (e) {
    //             console.log(e);
    //             swal({
    //                 title: 'Bağlantı hatası!',
    //                 text: 'Lütfen tekrar deneyin',
    //                 icon: 'error'
    //             });
    //             $("#form-submit-btn").prop("disabled", false);
    //         });
    //     return false;
    // });

    Dropzone.autoDiscover = false;

    $(function () {
        var dz = null;
        $("#applyDropzone").dropzone({
            autoProcessQueue: false,
            paramName: "file",
            maxFilesize: 3,
            maxThumbnailFilesize: 2,
            maxFiles: 1,
            parallelUploads: 1,
            acceptedFiles: ".pdf",
            uploadMultiple: false,
            addRemoveLinks: true,
            dictDefaultMessage: "Transkript Ekle",
            dictRemoveFile: "Kaldır",
            dictFileTooBig: "Max dosya boyutu : 3 Mb",
            dictCancelUpload: "İptal et",
            dictUploadCanceled: "Yükleme iptal edildi",
            dictCancelUploadConfirmation: "Yüklemeyi iptal etmek istiyor musunuz?",
            init: function () {

                this.on("sending", function (file, xhr, formData) {
                    formData.append("email", $("#email").val());
                });

                dz = this;
                $("#form-submit-btn").click(function (e) {

                    e.preventDefault();

                    if ($("#applyForm").valid() === false) {
                        $("#applyForm").valid();
                        swal("Uyarı", "Eksik alanlar mevcut!", "warning");
                        return false;
                    }

                    var _cardType = $("#IdentityPassport option:selected").text();

                    if (_cardType === "T.C. Kimlik Numarası") {
                        if (TCNOKontrol($("#tcNo").val()) != true) {
                            swal("Hata", "TC No Geçersiz!", "error");
                            return false;
                        }
                    }

                    if ($('#checkbox-1')[0].checked === false) {
                        swal("Uyarı", "KVKK metnini okuyup işaretlemelisiniz!", "warning");
                        return false;
                    };

                    if ($('#checkbox-2')[0].checked === false) {
                        swal("Uyarı", "Açık Rıza Beyan Formu metnini okuyup işaretlemelisiniz!", "warning");
                        return false;
                    };

                    if (star1_ === null || star1_ === "" || star2_ === null || star2_ === "") {
                        swal("Uyarı", "Lütfen oylamaları eksiksiz doldurunuz!", "warning");
                        return false;
                    };

                    //var _emailAddress = $("#email").val();

                    $("#form-submit-btn").prop("disabled", true);

                    if (dz.files.length == 0) {
                        swal("Uyarı", "Transkript yüklemelisiniz!", "warning");
                        $("#form-submit-btn").prop("disabled", false);
                        return false;
                    }

                    //var emailAddress2 = $('#email').val();

                    // var _job = $("#IdentityPassport option:selected").text();
                    // var _uni = $("#university option:selected").text();

                    var values = $("#applyForm").serialize();

                    //values += "&selectJob=" + encodeURIComponent(_job);

                    $.ajax({
                        type: 'POST',
                        dataType: "json",
                        url: '/tei/post.php',
                        data: values // getting filed value in serialize form
                    })
                        .done(function (data) { // if getting done then call.

                            if (data.status === "ok") {
                                dz.processQueue();
                                $("#form-submit-btn").prop("disabled", false);

                            } else {
                                console.log(data.result);
                                $("#form-submit-btn").prop("disabled", false);
                                swal({
                                    title: data.result,
                                    icon: 'warning'
                                });
                            }
                        })
                        .fail(function () { // if fail then getting message
                            $("#form-submit-btn").prop("disabled", false);
                            swal("Hata", "Başvuru başarısız! Lütfen tekrar deneyin.", "error");
                        });

                    return false;
                });

            },
            error: function (file, response, xhr) {
                swal("Hata", "Başvuru başarısız!", "error");
                $("#form-submit-btn").prop("disabled", false);
                setTimeout(() => {
                    this.removeFile(file);
                }, 3000);
            },
            success: function (file, response, xhr) {
                this.removeFile(file);
                swal({
                    title: 'Başvurunuz Kaydedildi',
                    icon: 'success'
                }).then(function () {
                    location.reload();
                });
            },
            queuecomplete: function (file) {
                // this.removeFile(file);
            }
        });

    });
});
