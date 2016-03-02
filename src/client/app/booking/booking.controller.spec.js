
describe('Booking Controller', function() {
    var controller,
        $controller;

    beforeEach(function() {
        module('babylon.booking');
        inject(function(_$controller_) {
            $controller = _$controller_;
        });

        controller = $controller('BookingController');
    });

    it('should exists', function() {
        expect(controller).toBeDefined();
    });

    it('should have family data', function() {
        expect(controller.family).toBeDefined();
    });

    it('should have healthcare professionals data', function() {
        expect(controller.healthcareProfessionals).toBeDefined();
    });

    it('should have doctors data', function() {
        expect(controller.doctors).toBeDefined();
    });

    it('should have appointment data', function() {
        expect(controller.appointmentDetails).toBeDefined();
    });


    describe('family member', function() {
        var appointmentDetails;

        beforeEach(function() {
            controller.family = [{
                id: 21,
                name: 'Jon'
            },{id: 18,
               name: 'berry'
              }];
        });

        it('one should be selected', function() {

            controller.setFamilyMember(0);
            appointmentDetails = controller.getAppointmentDetails();

            expect(appointmentDetails.familyMember.name).toBe('Jon');
        });

        it('one should be highlighted', function() {
            controller.setFamilyMember(0);
            expect(controller.isFamilyMemberSelected(0)).toBe(true);
        });
    });

    describe('healthcare professional', function() {
        var appointmentDetails;

        beforeEach(function() {
            controller.healthcareProfessionals = [{
                                                    type : 'gp',
                                                },
                                                  {
                                                      type : 'nurse'
                                                  }];
        });

        it('one should be selected', function() {

            controller.setHealthcareProfessional(0);
            appointmentDetails = controller.getAppointmentDetails();

            expect(appointmentDetails.healthcareProfessional.type).toBe('gp');
        });

        it('one should be highlighted', function() {
            controller.setHealthcareProfessional(0);
            expect(controller.isHealthcareProfessionalSelected(0)).toBe(true);
        });
    });

    describe('doctors', function() {
        var appointmentDetails;

        beforeEach(function() {
            controller.doctors = [{
                                    name: 'Dr. Rick Sprock',
                                    id: 10
                                },
                                  {
                                      name: 'Dr. John Brown',
                                      id: 11
                                  }];
        });

        it('one should be selected', function() {

            controller.setDoctor(1);
            appointmentDetails = controller.getAppointmentDetails();

            expect(appointmentDetails.doctor.id).toBe(11);
        });

        it('one should be highlighted', function() {
            controller.setDoctor(1);
            expect(controller.isDoctorSelected(1)).toBe(true);
        });

        it('list is visible', function() {
            controller.showDoctorsList();

            expect(controller.isDoctorsListVisible()).toBe(true);
        });

        it('list should be hidden', function() {
            controller.showDoctorsList();
            controller.hideDoctorsList();

            expect(controller.isDoctorsListVisible()).toBe(false);
        });
    });

    describe('appointments', function() {
        var appointmentDetails;

        beforeEach(function() {
            controller.appointmentDetails = [{
                                                date: 'May 21',
                                                time: '13:00'
                                            }];
        });

        it('one should be selected', function() {

            controller.setAppointment(0);
            appointmentDetails = controller.getAppointmentDetails();

            expect(appointmentDetails.appointmentDetails.date).toBe('May 21');
        });

        it('one should be highlighted', function() {
            controller.setAppointment(0);

            expect(controller.isAppointmentSelected(0)).toBe(true);
        });

        it('list is visible', function() {
            controller.showAppointmentsList();

            expect(controller.isAppointmentsListVisible()).toBe(true);
        });

        it('list should be hidden', function() {
            controller.showAppointmentsList();
            controller.hideAppointmentsList();

            expect(controller.isAppointmentsListVisible()).toBe(false);
        });
    });

});
