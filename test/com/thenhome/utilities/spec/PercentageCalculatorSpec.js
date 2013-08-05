describe("PercentageCalculator", function() {
    var percentageCalculator;

    beforeEach(function() {
        percentageCalculator = new PercentageCalculator();
    });

    it("should be able to pass in the total number of pages", function() {
        var expectedTotalPages = 5;
        percentageCalculator.setTotalNumberOfPages(expectedTotalPages);
        expect(percentageCalculator.getTotalNumberOfPages()).toEqual(expectedTotalPages);
    });

    it("should be able to pass in the current page", function() {
        var expectedCurrentPage = 2;
        percentageCalculator.setCurrentPage(expectedCurrentPage);
        expect(percentageCalculator.getCurrentPage()).toEqual(expectedCurrentPage);
    });

    it("should be able to calculate the percentage of the current page," +
        " compared to the total number of pages", function() {

        var currentPage = 3;
        var totalPages = 9;
        var expectedPercentage = (currentPage / totalPages) * 100;

        percentageCalculator.setCurrentPage(currentPage);
        percentageCalculator.setTotalNumberOfPages(totalPages);

        expect(percentageCalculator.calculatePercentage()).toEqual(expectedPercentage);
    });
});