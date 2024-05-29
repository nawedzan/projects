#include<iostream>
#include<fstream>
#include<ctime>
#include<string>

using namespace std;
void line_f(){
    ifstream file(time_record.txt)
}
int main(){
    ofstream file("record.txt",ios::app);
    if(file.is_open()){
        time_t now=time(0);
        tm *localTime = localtime(&now);
        char buffer[100];
        strftime(buffer,100," %A, %B %d", localTime);
        cout<<buffer;
        // file<<buffer<<endl;
        cout<<"what did u use"<<endl;
        line_f();
        file<<"what did u use"<<endl;
        line_f();
        
        string tp;
        getline(cin,tp);
        file<<tp<<" "<<endl;
       
            
        
        file.close();

        
    }
    
}