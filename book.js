class Book{
    constructor(title,author,pages,read){
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.read=read;

        function info(){
            return "The " +title + " by " + author + ", " + pages + " pages, " + "read " +read;
      }
    }
}