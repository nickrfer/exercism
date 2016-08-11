public class HelloWorld {

	private static final String FORMAT_HELLO = "Hello, %s!";
	
	public static String hello(String name) {
		String helloName = name;
		if (helloName == null || helloName.equals("")) {
			helloName = "World";
		}

		return String.format(FORMAT_HELLO, helloName);
	}
}
