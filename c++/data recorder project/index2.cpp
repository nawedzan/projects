#include <iostream>
#include <ctime>

int main() {
    time_t now = time(nullptr);
    tm* localTime = localtime(&now);
    
    // Specify the format for the date and time
    char buffer[80];
    strftime(buffer, 80, "%A, %B %d, %Y %I:%M:%S %p", localTime);
    
    std::cout << "Current time: " << buffer << std::endl;
    
    return 0;
}
