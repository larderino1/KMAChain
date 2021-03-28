// Факультети, спеціальності, семестри, предмети, викладачі, студенти, завдання, бали
const education_model = {
    "faculties": [{
        "faculty": "Faculty of Subject",
        "specialities": [{
            "speciality": "Name",
            "year_enter": "Year",
            "year_graduate": "Year",
            "students": [{
                "fullname": "Surname Name Patronymic",
                "e-mail": "n.surname@ukma.edu.ua",
            }]
        }],
        "teachers": [
            { "fullname": "Surname Name Patronymic" }
        ]
    }],
    "subjects": [{
        "subject": "Name",
        "year": "Year",
        "trimester": "1",
        "teachers": [{
            "lectures": "Surname Name Patronymic",
            "practices": "Surname Name Patronymic",
        }],
        "students": [{
            "fullname": "Surname Name Patronymic",
            "e-mail": "n.surname@ukma.edu.ua",
            "grade_for_subject": "Grade",
            "tasks": [{
                "task": "Name",
                "description": "Details",
                "grade": "Grade",
            }]
        }],
    }]
}