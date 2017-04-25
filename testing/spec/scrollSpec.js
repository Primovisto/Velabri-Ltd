describe("scroll", function() {
    describe('scroll function', function() {
        it('should appear when the user scrolls more than 70px down the page', function() {
            expect($('header')).toHaveClass('navbar-fixed-top');
        });
    });
});