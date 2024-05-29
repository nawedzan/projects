#include <iostream>
#include <fstream>
#include <string>
using namespace std;
int main(){
   fstream newfile ,secondnewfile,thirdnewfile;


   int dot_count=0;
   newfile.open("abc1.txt"); 
   secondnewfile.open("nfile.txt");
   if (newfile.is_open() and secondnewfile.is_open()){ 
      string tp;
      while(getline(newfile, tp)){ 
      secondnewfile << tp <<" "; 
      }
      newfile.close(); 
      secondnewfile.close();
   }

   secondnewfile.open("nfile.txt");
   thirdnewfile.open("pfile.txt");
   if(secondnewfile.is_open() and thirdnewfile.is_open()){
      string tp;
      while(getline(secondnewfile,tp,'.')){
         dot_count++;
        
         thirdnewfile<<tp<< "."<<" ";
          if(dot_count%5==0){
            thirdnewfile <<endl;
            dot_count=0;
         }
      }
   }
}
