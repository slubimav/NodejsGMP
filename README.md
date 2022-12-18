# NodeJS Global Mentoring Program [2022Q4 BY+GUKA]
## TASK 1.1
Write a program which reads a string from the standard input stdin, reverses it and then writes it to the standard output stdout.
- The program should be started from npmscript via nodemon(i.e. npm run task1).
- The program should be running in a stand-by mode and should not be terminated after the first-stringprocessing.

## TASK 1.2
Write a program which should do the following:
- Read the content of csvfile from./csvdirectory. Example: https://epa.ms/nodejs19-hw1-ex1•Use the csvtojsonpackage (https://github.com/Keyang/node-csvtojson) to convert csvfile to jsonobject.
- Write the csvfile content to a new txtfile.Use the following format: https://epa.ms/nodejs19-hw1-ex2.•Do not load all the content of the csvfile into RAM via stream (read/write file content line by line).
- In case of read/write errors, log them in the console.
- The program should be started via npm scriptusing nodemon(i.e. npm run task2)TASK 1.2Write a program which should do the following:
- Read the content of csvfile from./csvdirectory. Example: https://epa.ms/nodejs19-hw1-ex1•Use the csvtojsonpackage (https://github.com/Keyang/node-csvtojson) to convert csvfile to jsonobject.
- Write the csvfile content to a new txtfile.Use the following format: https://epa.ms/nodejs19-hw1-ex2.
- Do not load all the content of the csvfile into RAM via stream (read/write file content line by line).
- In case of read/write errors, log them in the console.•The program should be started via npm scriptusing nodemon(i.e. npm run task2)

## TASK 1.3
Rewrite the above-mentionedprograms to use babel(https://babeljs.io/)and ES6modules.

EVALUATION CRITERIA
 1. Task 1.1is fulfilled to the full extent.
 2. Task 1.2is fulfilled to the full extent;the file is loaded fully into the RAM.
 3. Task 1.2is fulfilled to the full extent;the file is not loaded fully in the RAM(pipeline method https://nodejs.org/api/stream.html#stream_stream_pipeline_streams_callback).
 4. All the tasks are fulfilled to the full extent (Task 1.1,Task 1.2,Task 1.3).

Status | Task | Url
-----|-----|--------
Done | Task 1.1 | https://github.com/slubimav/NodejsGMP/blob/task-1/task_1_1.js
Done | Task 1.2 | https://github.com/slubimav/NodejsGMP/blob/task-1/task_1_2.js
Done | Task 1.22 | https://github.com/slubimav/NodejsGMP/blob/task-1/task_1_22.js
Done | Task 1.3 | https://github.com/slubimav/NodejsGMP/tree/task-1.3

# How to check

## Task 1.1

```

npm run task1

```

## Task 1.2

Code: https://github.com/slubimav/NodejsGMP/blob/task-1/task_1_2.js
CSV: https://github.com/slubimav/NodejsGMP/blob/task-1/csv/data.csv
Output file: https://github.com/slubimav/NodejsGMP/blob/task-1/csv/data.txt


```

npm run task2

```

Code: https://github.com/slubimav/NodejsGMP/blob/task-1/task_1_22.js
CSV: https://github.com/slubimav/NodejsGMP/blob/task-1/csv/data.csv
Output file: https://github.com/slubimav/NodejsGMP/blob/task-1/csv/data.txt

In this exemple we are going to read data by 10 bytes, print them, and process in CSV()
After CSV() will have ready JSON object it will write to file.


```

npm run task2

```

## Task 1.1

We use ES modules. In package.json there is "type" key with "module" value.
In order get code compartible to ES2015 we use babel.
Next commant generates file task_1_22_b.js

```

npm run build2

```