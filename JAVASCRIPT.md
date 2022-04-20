JAVASCRIPT

General Notes

Javascipt is a single threaded synchronous language.

Everything is either an object or a primitive value which can be
converted into object-like value. 

Everything is one at a time.


The entire engine works through a process known as Ececution Context stack.

GLOBAL OBJECT --> "THIS" --> "Outer Environment-->
--RUNS CODE

The code is run through the lexical environment which has to do where the code is invoked and not neccesarily where its written.

when functions are invoked they create individual exection contexts. Paramaters/Variables grab their definitions via the scope chain. The scope chain follows the heigharchy of the execuction context stack


PRIMITIVE TYPES
Undefined, Null, Boolean, String, Number, Symbol

OPERATORS
A special Function that has different type of syntax more specifcally with Infix Notation (between paramaters)
(+,-,*,%,|| etc...)
Operators follow a heiharchy in which they are execetuted such as * > +


COERCION
When you convert one value type to another
(false = 0, "2" = 2, etc...)
Often where bugs occur which can be avoided using....

STRICT MODE (=== or !=== rather == or !==)


the || Operator grabs the first true argument.


