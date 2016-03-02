(function (){
    'use strict';

    angular
        .module('babylon.booking')
        .controller('BookingController', BookingController);

    // BookingController.$inject = ['dataService'];

    function BookingController() {
        var booking = this;

        var _newAppointment = {
            familyMember: {},
            healthcareProfessional: {},
            doctor: {},
            appointmentDetails: {}
        };

        var _isDoctorSelected = false,
            _isDoctorsListVisible = false,
            _isAppointmentSelected = false,
            _isAppointmentsListVisible = false;


        // should call bookingService.getFamilyMembers()
        // which would call /api/booking/family/:{userid}
        booking.family = [{
                id: 21,
                name: 'Jon',
                imageUrl: '/src/client/images/jon.jpg'
            },
            {
                id: 34,
                name: 'Rachel',
                imageUrl: '/src/client/images/rachel.jpg'
            }];

        // should call bookingService.gethealthcareProfessionals()
        //  which would call /api/booking/professionals/
        booking.healthcareProfessionals = [{
                                            type : 'gp',
                                            text: 'GP',
                                            imageUrl: 'src/client/images/type.jpg'
                                        },
                                        {
                                            type : 'nurse',
                                            text: 'Nurse',
                                            imageUrl: 'src/client/images/type.jpg'
                                        },
                                        {
                                            type : 'therapist',
                                            text: 'Therapist',
                                            imageUrl: 'src/client/images/type.jpg'
                                        },
                                        {
                                            type : 'specialist',
                                            text: 'Specialist',
                                            imageUrl: 'src/client/images/type.jpg'
                                        }];
        // should call bookingService.getDoctors()
        //        which would call /api/booking/doctors/
        booking.doctors = [{

                            name: 'Dr. Rick Sprock',
                            id: 10
                        },
                        {
                            name: 'Dr. John Brown',
                            id: 11
                        },
                        {
                            name: 'Dr. Jill Mill',
                            id: 12
                        },
                        {
                            name: 'Mr. Fred Forbes',
                            id: 13
                        },
                        {
                            name: 'Ms. Janet Jackson',
                            id: 14
                        },
                        {
                            name: 'Mr. Bob Marley',
                            id: 15
                        }];

        // should call booking service
        //        which would call /api/booking/appointments/
        booking.appointmentDetails = [{
                                date: 'May 21',
                                time: '13:00'
                            },
                            {
                                date: 'May 23',
                                time: '10:00'
                            },
                            {
                                date: 'May 29',
                                time: '9:00'
                            }];

        booking.setFamilyMember = function($index) {
            _newAppointment.familyMember = booking.family[$index];
        };

        booking.isFamilyMemberSelected = function($index) {
          return _newAppointment.familyMember.id === booking.family[$index].id;
        };

        booking.getAppointmentDetails = function() {
            return _newAppointment;
        };

        booking.setHealthcareProfessional = function($index) {
            _newAppointment.healthcareProfessional = booking.healthcareProfessionals[$index];
        };

        booking.isHealthcareProfessionalSelected = function($index) {
            return _newAppointment.healthcareProfessional.type === booking.healthcareProfessionals[$index].type;
        };

        booking.setDoctor = function($index) {
            _newAppointment.doctor = booking.doctors[$index];
            _isDoctorSelected = true;
            _isDoctorsListVisible = false;
        };

        booking.isDoctorSelected = function($index) {
            return _isDoctorSelected;
        };

        booking.showDoctorsList = function() {
            _isDoctorsListVisible = true;
        };

        booking.isDoctorsListVisible = function() {
          return _isDoctorsListVisible;
        };

        booking.hideDoctorsList = function() {
          _isDoctorsListVisible = false;
        };

        booking.setAppointment = function($index) {
            _newAppointment.appointmentDetails = booking.appointmentDetails[$index];
            _isAppointmentSelected = true;
            _isAppointmentsListVisible = false;
        };

        booking.isAppointmentSelected = function($index) {
            return _isAppointmentSelected;
        };

        booking.showAppointmentsList = function() {
            _isAppointmentsListVisible = true;
        };

        booking.isAppointmentsListVisible = function() {
            return _isAppointmentsListVisible;
        };

        booking.hideAppointmentsList = function() {
            _isAppointmentsListVisible = false;
        };

        booking.saveAppointmentDetails = function() {
            // should be a call to bookingService
            // PUT /api/booking/
        };
    }
})();
