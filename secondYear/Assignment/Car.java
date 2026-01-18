class Car {
     public String model;
     public String color ;
     public int prize;
    



     public void dispayMethod(){
        System.out.println("model :" +" " + model);
        System.out.println("color :" +" " + color);
        System.out.println("prize :" +" " + prize);
     }

    public static void main(String []args){
          Car obj1 = new Car();
          obj1.model = "abc";
          obj1.color = "yello";
          obj1.prize = 123456;

          Car obj2 = new Car();
          obj2.model = "xyz";
          obj2.color = "Black";
          obj2.prize = 1000000;


          obj1.dispayMethod();
          System.out.println();
          obj2.dispayMethod();
    }
}