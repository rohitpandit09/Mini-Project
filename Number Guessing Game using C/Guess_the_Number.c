#include<stdio.h>
#include<time.h>
#include<stdlib.h>

int main(){
    int random_number,number,number_of_attempts=0;
    srand(time(NULL));                                        // Random number generator 
    random_number= rand() % 100;                             // Random NUMBER STORED 

while(number !=random_number){

    printf("Enter number(From 1 to 100) :- ");
    scanf("%d",&number);

    if(number>random_number){
        printf("Please guess smaller number\n");
        number_of_attempts++;
        
    }

    else if(number<random_number){
        printf("Please guess bigger number\n");
        number_of_attempts++;
    }

    else if(number==-1){
        return 1; 
    }
}
if(number==random_number){
        printf("\nHurray!! You got it");
        printf("\nThe number was %d",random_number);
        printf("\nYou took %d  attempts",number_of_attempts + 1);
    }
    
    return 0;
}