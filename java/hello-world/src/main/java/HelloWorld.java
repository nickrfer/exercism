public class HelloWorld {

  public static String hello(String name) {
    if (name == null || name.equals("")) {
      return "Hello, World!";
    }

    return "Hello, " + name + "!";
  }
}
