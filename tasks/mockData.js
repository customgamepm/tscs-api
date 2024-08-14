const { faker } = require('@faker-js/faker');
const User = require('../src/models/User');
const AccountType = require('../src/models/AccountType');
const { hashPassword } = require('../src/helpers/AppHelper');

// Delete all courses
// console.log("Deleting all users...");
// Course.destroy({ truncate: true }).then(() => {
//     for (var i = 0; i < 20; i++) {
//         const courseName = `BS ${faker.company.name()}`;
    
//         Course.create({
//             name: courseName
//         }).then(() => {
//             console.log(`Creating course ${courseName}`)
//         })
//     }
// });

// const loadStudents = async () => {
//     console.log("Destroying all students...");
//     await Student.destroy({ truncate: true });

//     const course = (await Course.findAll())[0];

//     for (var i = 0; i < 5; i++) {
//         const firstName = faker.person.firstName();
//         const lastName = faker.person.lastName();

//         console.log(`Creating student ${firstName} ${lastName}...`);

//         await Student.create({
//             firstName: firstName,
//             lastName: lastName,
//             courseId: course.id
//         })
//     }
// }

// loadStudents().then(() => {
//     console.log("Done loading students...");
// })

const loadUsers = async () => {
    await User.destroy({ truncate: true });

    await User.create({
        username: "admin",
        password: await hashPassword('admin'),
        first_name: "admin",
        last_name: "motchi",
        email_address: "admin1@tscs.edu",
        // type: "admin"
        account_type_id: 1
    });
}

const loadAccountTypes = async () => {
    await AccountType.destroy({ truncate: true });

    await AccountType.create({
        name: "admin",
        type: 1,
        scope: [
            "user.view",
            "user.add",
            "user.modify",
            "user.delete"
        ]
    });

    await AccountType.create({
        name: "student",
        type: 2,
        scope: [
            "teacher.view",
            "schedule.view",
            "schedule.add",
            "schedule.modify",
            "schedule.delete",
            "consultation.view",
            "consultation.add",
            "consultation.modify",
            "consultation.delete"
        ]
    });
    
    await AccountType.create({
        name: "teacher",
        type: 3,
        scope: [
            "student.view",
            "schedule.view",
            "schedule.add",
            "schedule.modify",
            "schedule.delete",
            "consultation.view",
            "consultation.add",
            "consultation.modify",
            "consultation.delete"
        ]
    });
}

loadUsers().then(() => {
    console.log("Done loading users");
})

loadAccountTypes().then(() => {
    console.log("Done loading account types");
})