function PercentageCalculator(){
    this.CONVERT_TO_PERCENTAGE = 100;
    this.totalPages;
    this.currentPage;
}

PercentageCalculator.prototype = {

    calculatePercentage: function(){
        return (this.getCurrentPage() / this.getTotalNumberOfPages()) * this.CONVERT_TO_PERCENTAGE;
    },

    setTotalNumberOfPages: function(totalPages){
        this.totalPages = totalPages;
    },
    getTotalNumberOfPages: function(){
        return this.totalPages;
    },
    setCurrentPage: function(currentPage){
        this.currentPage = currentPage;
    },
    getCurrentPage: function(){
        return this.currentPage;
    }
}