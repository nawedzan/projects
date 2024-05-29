#include <iostream>
#include <ctime>
#include<fstream>


int main() {
    // Get the current time
    time_t now = time(nullptr);
    time_t *a=&now;
    // Convert the current time to a tm struct for local time
    tm* localTime = localtime(a);
    
    // Display the current time
    std::cout << "Current time: " << asctime(localTime);
    
    // Display the current day, date, and month
    std::cout<<"time: "<<now<<std::endl;
    std::cout << "Day: " << localTime->tm_wday << std::endl; // 0 is Sunday, 1 is Monday, ...
    std::cout << "Date: " << localTime->tm_mday << std::endl;
    std::cout << "Month: " << localTime->tm_mon + 1 << std::endl; // Month is 0-based, so add 1
  
    return 0;
}
