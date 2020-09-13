// DRY: Stands for "Don't repeat yourself", a principle that aims to prevent redundancy so that when a change needs to be made to an element it only needs to be done once.

// KISS: Stands for "keep it stupid simple", when applied to coding means that everything should be kept simple and we should avoid making anything too overly complicated.

// Avoid creating a YAGNI : "You aren't going to need it" this phrase is a principle that states a programer should only add or impliment things when they are needed. This principle tries to discourage thinking ahead to what might be needed and adding unessesary code that might not be used.

// Do the simplest thing that could possibly work: This principle wants the programer to use the simplest method possible out of all the ways the code might work, then refactor and make it as clean as possible.

// Don't make me think: Title of a book about web usability. It states taht code should be easy to read with little effort and if it is too complicated it can probably be simplified.

// Write code for the maintainer: This principle is to code for whoever gets to maintain your code. The more clear the code the better someone else can understand it and make changes without creating new errors.

// Single responsibility principle: Every module,class or function should perform a single well defined task. If written well when a change is made it would only change a single thing.

// Avoid premature optimization: This principle aims to avoid optimizing code before we know that it works or even before the task needed is working. 

// Separation of concerns: Separating code into distinct section that adress a separate concern can help when managing and understanding the code. This will also prevent errors of multiple functions or features.



//Which ones surprise you (if any)? I am not surprized that the principles focus on creating simple, easy to read and organized code. But right now I am worried that lack of knowledge will lead me to create clunky and complicated code.


//Which one is currently giving you the most struggle? The current struggle is trying to follow YAGNI because somethimes I write something I think I am going to need and down the line I replace with something that works better or I understand better and I already totally forgot about the previous. Just keeping up with my own code and what I have already tried to do after working on something will usually throw me off. 

//function f takes parameter of l 
const f = l => {
    //let the variables equal to the numbers shown
    let es = 0, p = 0, c = 1, n = 0
    //while parameter l is greater than or equal to c (which is equal to 1) perform the following function{}
    // l is the limit
    while (c <= l) {
    // the sum of c and p are equal to which gives the next value
      n = c + p;
      //[1,0] = [0,1]
      [c, p] = [n, c]
      //es plus the value of the function on the right
      //function on the right is when c is even add to ex otherwise c is 0
      es += (c % 2 === 0) ? c : 0
    }
    return es
  }
  
  console.log(f(55))

//1. In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?
  // A better name for the function could have been addSum or evenSum just f and the letters in the first example gave no clues to what each variable might mean.

//2. If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?
  //f2 for sure. It is way easier to read and it wouldn't take much time to figure out why it works because it describes what it is doing with each variable.

//3. Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary? 
  // If I remeove it the error says that the left hand side is invalid. The semicolon is necessary for funciton f to work
