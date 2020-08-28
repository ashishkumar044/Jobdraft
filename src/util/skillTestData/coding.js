//Python Questions
export const Python = [
    {
        id:1,
        question: `For tuples and list which is correct?`,
        options: [
            `List and tuples both are mutable.`, 
            `List is mutable whereas tuples are immutable.`, 
            `List and tuples both are immutable.`, 
            `List is immutable whereas tuples are mutable.`
        ],
        answer: `List is mutable whereas tuples are immutable.`
    },
    {
        id:2,
        question: ` What is output of following code −  
                        def func(n):
                        if(n==1):
                        return 1;
                        else:
                        return(n+func(n-1))
                        print(func(4))` ,
        options: [
            `12`, 
            `10`, 
            `9`, 
            `11`
        ],
        answer: `10`
    },
    {
        id:3,
        question: `Which is invalid in python for z = 5 ?`,
        options: [
            `z = z++`, 
            `z = ++z`, 
            `z += 1`, 
            `z -= 1`
        ],
        answer: `z = z++`
    },
    {
        id:4,
        question: `What is the value of a, b, c in the given code?   a, b = c = 2 + 2, ''TutorialsPoint''`,
        options: [
            `a=4, 'TutorialsPoint' b= 4, 'TutorialsPoint' c= 4, 'TutorialsPoint'`, 
            `a=2 b= 'TutorialsPoint' c=4, 'TutorialsPoint'`, 
            `a=4 b= 'TutorialsPoint' c=4, 'TutorialsPoint'`, 
            `a=4 b= 'TutorialsPoint' c= NULL`
        ],
        answer: `a=4 b= 'TutorialsPoint' c=4, 'TutorialsPoint'`
    },
    {
        id:5,
        question: `What is the output for −  'you are doing well' [2:999]`,
        options: [
            `'you are doing well'`, 
            `' '`, 
            `Index error`, 
            `'u are doing well'`
        ],
        answer: `'u are doing well'`
    },
]