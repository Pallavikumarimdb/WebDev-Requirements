
const test1 =  (str) =>  Buffer.from(str, "base64").toString("binary");


const test2 = (str1) =>{
    return Buffer.from(str1, "binary").toString("base64");
}

const atob = (str) => Buffer.from(str, "base64").toString("binary");

console.log(test1('Zm9vYmFy'))
console.log(test2("foobar"))


/*
Decoding Base64 Encoded String

To decode a string of data that has been encoded using base-64 encoding, follow these steps:

    Open the Terminal/SSH and type node to start practicing coding.
    Create a Buffer for the given string with base-64 encoding.
    Use Buffer.prototype.toString() to return the decoded string.

*/



/*
Base64 encoding is a method used to convert binary data into a text format using a specific set of 64 characters. This encoding is commonly used in various applications, such as email transmission, data storage, and embedding complex data in web pages.
Key Details

    Character Set:
        Base64 uses a specific set of 64 characters, which includes:
            Uppercase letters: A-Z (26 characters)
            Lowercase letters: a-z (26 characters)
            Digits: 0-9 (10 characters)
            Two additional characters, typically + and / (2 characters)
        The resulting character set is: ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/.

    Encoding Process:
        The encoding process takes binary data (which is made up of bytes) and converts it into a string of ASCII characters.
        Each group of 3 bytes (24 bits) is converted into 4 ASCII characters (6 bits each).
        If the total number of bytes is not divisible by 3, padding is added using the = character to ensure the output is a multiple of 4 characters.

    Example:
        Consider the string "Cat":
            In binary, "Cat" is represented as: 01000011 01000001 01110100.
            Grouping these bits into 6-bit segments gives: 010000 110100 000101 110100.
            Each 6-bit segment is then converted to decimal: 16, 52, 1, 52.
            These decimal values correspond to the Base64 characters: Q2F0.
        Therefore, the Base64 encoding of "Cat" is Q2F0.

    Decoding Process:
        The decoding process reverses the encoding by converting the Base64 string back into binary data.
        Each Base64 character is mapped back to its corresponding 6-bit binary value, and the original bytes are reconstructed.

    Use Cases:
        Email: Base64 is often used to encode attachments in emails to ensure that binary data can be transmitted over protocols that only support text.
        Data URLs: Base64 allows embedding images or other binary data directly in HTML or CSS files.
        APIs: Some APIs use Base64 to encode data for transmission, especially when dealing with binary files.

Relevant Context

    Limitations: Base64 encoding increases the size of the data by approximately 33%, which can be a consideration when transmitting large amounts of data.
    Security: Base64 is not a form of encryption; it merely encodes data. Sensitive information should be encrypted before being Base64 encoded.

Conclusion

Base64 encoding is a widely used method for representing binary data in a text format, making it suitable for various applications in computing and data transmission. Understanding its encoding and decoding processes, as well as its use cases, is essential for developers working with data in different formats.
*/