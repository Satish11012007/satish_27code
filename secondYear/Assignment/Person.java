import java.util.Scanner;
public class Person {
     int height;
    

     public static void display(int hei){
            if(hei > 175){
                System.out.println("Tall");
            }else if(155 < hei || 175 < hei){
                System.out.println("Average");
            }else if(hei< 155){
                System.out.println("Dwarf");
            }
     }

    public static void main(String []args){
     Scanner sc = new Scanner(System.in);
     Person p1 = new Person();
     System.out.print("Enter the height of the user :");
     p1.height = sc.nextInt();
      
     display(p1.height);
    }
}
