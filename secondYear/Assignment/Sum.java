import java.util.Scanner;

public class Sum {
    public static void main(String []args){
    Scanner sc = new Scanner(System.in);
    System.out.print("Enter the Number :");
    int no = sc.nextInt();
    int odd = 0;
    int even = 0;
    for(int i = 1 ; i < no ; i++){
        if(i%2 == 0){
            even = even + i ; 
        }else{
            odd = odd + 1 ;
        }
    }

    System.out.println("Sum of odd :" +" "+ odd);
    System.out.println("Sum of even :" +" "+ even);
 }
}