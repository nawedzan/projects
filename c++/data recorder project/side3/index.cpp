#include <iostream>
#include <ctime>

bool isNewerDay(time_t day1, time_t day2) {
    // Convert both time_t values to tm structures
    tm* tm1 = localtime(&day1);
    tm* tm2 = localtime(&day2);

    // Compare year, month, and day of month
    if (tm1->tm_year > tm2->tm_year)
        return true;
    if (tm1->tm_year < tm2->tm_year)
        return false;
    if (tm1->tm_mon > tm2->tm_mon)
        return true;
    if (tm1->tm_mon < tm2->tm_mon)
        return false;
    if (tm1->tm_mday > tm2->tm_mday)
        return true;
    if (tm1->tm_mday < tm2->tm_mday)
        return false;

    // If year, month, and day are the same, return false
    return false;
}

int main() {
    // Get the current time
    time_t currentTime = time(nullptr);

    // Get the time for a specific day (e.g., January 1, 2024)
    tm timeStruct = {};
    timeStruct.tm_year = 124; // 2024 (years since 1900)
    timeStruct.tm_mon = 0;    // January (months are 0-based)
    timeStruct.tm_mday = 1;   // 1st day of the month

    time_t specificDay = mktime(&timeStruct);

    // Check if the specific day is newer than the current day
    if (isNewerDay(specificDay, currentTime)) {
        std::cout << "The specific day is newer than the current day.\n";
    } else {
        std::cout << "The specific day is not newer than the current day.\n";
    }

    return 0;
}
