const testCases = [
    {
        name: "cpp : hello world",
        reqObject: {
            language: "cpp",
            script:
                "#include<bits/stdc++.h>\n" +
                "using namespace std;\n" +
                "int main(){\n" +
                "    cout << \"hello world\";\n" +
                "return 0;\n" +
                "}\n"
        },
        expectedResponse: {
            val: "hello world",
            status: 200,
            error: 0
        }
    },
    {
        name: "cpp : print stdin",
        reqObject: {
            language: "cpp",
            script:
                "#include<bits/stdc++.h>\n\n" +
                "using namespace std;\n" +
                "int main(){\n\n" +
                "    int a;\n" +
                "    while(cin >> a){\n" +
                "        cout << a << endl;\n" +
                "    }\n" +
                "    return 0;\n\n" +
                "}\n",
            stdin: "1 2 3"
        },
        expectedResponse: {
            val: "1\n2\n3\n",
            status: 200,
            error: 0
        }

    },
    {
        name: "nodejs : hello world",
        reqObject: {
            language: "nodejs",
            script: "console.log('hello world')"
        },
        expectedResponse: {
            val: "hello world\n",
            status: 200,
            error: 0
        }
    },
    {
        name: "nodejs : print stdin",
        reqObject: {
            language: "nodejs",
            script:
                "process.stdin.setEncoding('utf8'); \n " +
                "process.stdin.on('data', (input) => { \n " +
                "  console.log(input); \n " +
                " \n " +
                "}); \n ",
            stdin : "1 2 3"
        },
        expectedResponse: {
            val: "1 2 3\n",
            status: 200,
            error: 0
        }
    },
    {
        name: "python : hello world",
        reqObject: {
            language: "python",
            script: "print('hello world')"
        },
        expectedResponse: {
            val: "hello world\n",
            status: 200,
            error: 0
        }
    },
    {
        name: "python : print stdin",
        reqObject: {
            language: "python",
            script:
                "try:\n" +
                "    while(True):\n" +
                "        line = input()\n" +
                "        if not line:\n" +
                "            break\n" +
                "        print(line)\n" +
                "except EOFError:\n" +
                "    pass",
            stdin: "1 2 3"
        },
        expectedResponse: {
            val: "1 2 3\n",
            status: 200,
            error: 0
        }
    },
    {
        name: "c : hello world",
        reqObject: {
            language: "c",
            script:
                "#include<stdio.h>\n\n" +
                "int main(){\n\n" +
                "    printf(\"hello world\");\n" +
                "    return 0;\n" +
                "}\n"
        },
        expectedResponse: {
            val: "hello world",
            status: 200,
            error: 0
        }
    },
    {
        name: "c : print stdin",
        reqObject: {
            language: "c",
            script:
                "#include <stdio.h>\n" +
                "int main() {\n" +
                "    int number;\n" +
                "    while (scanf(\"%d\", &number) == 1) {\n" +
                "        printf(\"\%d\\n\", number);\n" +
                "    } \n" +
                "    return 0;\n" +
                "}",
            stdin: "1 2 3"
        },
        expectedResponse: {
            val: "1\n2\n3\n",
            status: 200,
            error: 0
        }
    },
    {
        name: "java : print stdin",
        reqObject: {
            language: "java",
            script:
                "import java.util.Scanner;\n" +
                "public class Solution {\n" +
                "    public static void main(String[] args) {\n" +
                "        System.out.println(\"hello world\");\n" +
                "    }\n" +
                "}\n"
        },
        expectedResponse: {
            val: "hello world\n",
            status: 200,
            error: 0
        }
    },
    {
        name: "java : print stdin",
        reqObject: {
            language: "java",
            script:
                "import java.util.Scanner;\n" +
                "public class Solution {\n" +
                "    public static void main(String[] args) {\n" +
                "        Scanner scanner = new Scanner(System.in);\n" +
                "        while (scanner.hasNextInt()) {\n" +
                "            int number = scanner.nextInt();\n" +
                "            System.out.println(number);\n" +
                "        } \n" +
                "        scanner.close();\n" +
                "    }\n" +
                "}\n",
            stdin: "1 2 3"
        },
        expectedResponse: {
            val: "1\n2\n3\n",
            status: 200,
            error: 0
        }
    },
    {
        name: "TLE test",
        reqObject: {
            language: "nodejs",
            script: "for(let i=0 ; ; ){i++}"
        },
        expectedResponse: {
            val: "Time limit exceeded",
            status: 200,
            error: 1
        }
    },
    {
        name: "MLE test",
        reqObject: {
            language: "python",
            script: "one_gb_data = bytearray(1000 * 1024 * 1024)"
        },
        expectedResponse: {
            val: "Memory limit exceeded",
            status: 200,
            error: 1
        }
    }
]

module.exports = { testCases }



