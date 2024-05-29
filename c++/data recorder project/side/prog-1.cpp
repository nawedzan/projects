#include<iostream>
#include<ctime>
// using std namespace;
int main() {


    time_t now = time(0); // Set the value to 0
    time_t then = now; // Call time() with the address of now

    std::cout << "Then: " << then << std::endl;
    std::cout << "Now: " << now << std::endl;
    bool letter[26]={};

   

    return 0;
}