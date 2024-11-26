# Computer Science
>  Essentially, computer programming is about taking some input and creating some output - thus solving a problem. What happens in between the input and output, what we could call a black box, is the focus of this course.

### Black box with input and output
> For example, we may need to take attendance for a class. We could use a system called unary to count, one finger at a time.
   
> Computers today count using a system called binary. It’s from the term binary digit that we get a familiar term called bit. A bit is a zero or one: on or off.

> Computers only speak in terms of zeros and ones. Zeros represent off. Ones represent on. Computers are millions, and perhaps billions, of transistors that are being turned on and off.
    If you imagine using a light bulb, a single bulb can only count from zero to one.
    However, if you were to have three light bulbs, there are more options open to you!

Using three light bulbs, the following could represent zero:

    0 0 0

Similarly, the following would represent one:

    0 0 1

By this logic, we could propose that the following equals two:

    0 1 0

Extending this logic further, the following represents three:

    0 1 1

Four would appear as:

    1 0 0

We could, in fact, using only three light bulbs count as high as seven!

    1 1 1

As a heuristic, we could imagine that the following values represent each possible place in our binary digit:

    4 2 1

Computers use ‘base-2’ to count. This can be pictured as follows:

    2^2  2^1  2^0
    4    2    1

Therefore, you could say that it would require three bits (the four’s place, the two’s place, and the one’s place) to represent a number as high as seven.
    
Computers generally use eight bits (also known as a byte) to represent a number. For example, 00000101 is the number 5 in binary. 11111111 represents the number 255.

### ASCII
> Just as numbers are binary patterns of ones and zeros, letters are represented using ones and zeros too!

> Since there is an overlap between the ones and zeros that represent numbers and letters, the ASCII standard was created to map specific letters to specific numbers.

> For example, the letter A was decided to map to the number 65. 01000001 represents the number 65 in binary.

> If you received a text message, the binary under that message might represent the numbers 72, 73, and 33. Mapping these out to ASCII, your message would look as follows:

    H   I   !
    72  73  33

Thank goodness for standards like ASCII that allow us to agree upon these values!

Here is an expanded map of ASCII values:

    ASCII map
    If you wish, you can learn more about ASCII.
    Since binary can only count up to 255 we are limited to the number of characters represented by ASCII.

![alt text](cs50Week0Slide93.png)

### Unicode
As time has rolled on, there are more and more ways to communicate via text.

> Since there were not enough digits in binary to represent all the various characters that could be represented by humans, the Unicode standard expanded the number of bits that can be transmitted and understood by computers. Unicode includes not only special characters, but emoji as well.

There are emoji that you probably use every day. The following may look familiar to you:

### emoji
> Computer scientists faced a challenge when wanting to assign various skin tones to each emoji to allow the communication to be further personalized. In this case, the creators and contributors of emoji decided that the initial bits would be the structure of the emoji itself, followed by skin tone.

For example, the unicode for a generic thumbs up is U+1F44D. However, the following represents the same thumbs up with a different skin tone: U+1F44D U+1F3FD.
    
More and more features are being added to the Unicode standard to represent further characters and emoji.
    If you wish, you can learn more about Unicode.
    If you wish, you can learn more about emoji.

### Representation

Zeros and ones can be used to represent color.

Red, green, and blue (called RGB) is a combination of three numbers.

### red green blue boxes
> Taking our previously used 72, 73, and 33, which said HI! via text, would be interpreted by image readers as a light shade of yellow. The red value would be 72, the green value would be 73, and the blue would be 33.

### yellow box
Further, zeros and ones can be used to represent images, videos, and music!

Images are simply collections of RGB values.

Videos are sequences of many images that are stored together, just like a flipbook.

Music can be represented through MIDI data.

### Algorithms

    Problem-solving is central to computer science and computer programming.
    Imagine the basic problem of trying to locate a single name in a phone book.
    How might you go about this?
    One approach could be to simply read from page one to the next to the next until reaching the last page.
    Another approach could be to search two pages at a time.
    A final and perhaps better approach could be to go to the middle of the phone book and ask, “Is the name I am looking for to the left or to the right?” Then, repeat this process, cutting the problem in half and half and half.

    Each of these approaches could be called algorithms. The speed of each of these algorithms can be pictured as follows in what is called big-O notation:
![alt text](cs50Week0Slide141.png)
### big o notation

    Notice that the first algorithm, highlighted in red, has a big-O of n because if there are 100 names in the phone book, it could take up to 100 tries to find the correct name. The second algorithm, where two pages were searched at a time, has a big-O of ‘n/2’ because we searched twice as fast through the pages. The final algorithm has a big-O of log2n as doubling the problem would only result in one more step to solve the problem.

### Pseudocode

    The ability to create pseudocode is central to one’s success in both this class and in computer programming.

> Pseudocode is a human-readable version of your code. For example, considering the third algorithm above, we could compose pseudocode as follows:

    1  Pick up phone book
    2  Open to middle of phone book
    3  Look at page
    4  If person is on page
    5      Call person
    6  Else if person is earlier in book
    7      Open to middle of left half of book
    8      Go back to line 3
    9  Else if person is later in book
    10     Open to middle of right half of book
    11     Go back to line 3
    12 Else
    13     Quit

> Pseudocoding is such an important skill for at least two reasons. First, when you pseudocode before you create formal code, it allows you to think through the logic of your problem in advance. Second, when you pseudocode, you can later provide this information to others that are seeking to understand your coding decisions and how your code works.
    
> Notice that the language within our pseudocode has some unique features. First, some of these lines begin with verbs like pick up, open, look at. Later, we will call these functions.
    Second, notice that some lines include statements like if or else if. These are called conditionals.
    Third, notice how there are expressions that can be stated as true or false, such as “person is earlier in the book.” We call these boolean expressions.
    
    Finally, notice how these statements like “go back to line 3.” We call these loops.
    These building blocks are the fundamentals of programming.
    In the context of Scratch, which is discussed below, we will use each of the above basic building blocks of programming.

### Artificial Intelligence

> Consider how we can utilize the building blocks above to start creating our own artificial intelligence. Look at the following pseudocode:

    If student says hello
        Say hello back
    Else if student says goodbye
        Say goodbye back
    Else if student asks how you are
        Say you're well
    Else if student asks why 111 in binary is 7 in decimal
    ...

>  Notice how just to program a handful of interactions, many lines of code would be required. How many lines of code would be required for thousands or tens of thousands of possible interactions?

large language models look at patterns in large blocks of language. Such language models attempt to create a best guess of what words come after one another or alongside one another.

As very useful in many avenues of life and work, we stipulate that the utilization of AI-based software other than CS50’s own is not reasonable.

