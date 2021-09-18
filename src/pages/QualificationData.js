import python from './QualificationImg/Python.png';
import Intro_ML from './QualificationImg/IntrotoMachineLearning.png';
import Inter_ML from './QualificationImg/IntermediateMachineLearning.png';
import Pandas from './QualificationImg/Pandas.png';
import DataCleaning from './QualificationImg/DataCleaning.png';
import DataVisualization from './QualificationImg/DataVisualization.png';
import IntrotoSQL from './QualificationImg/IntrotoSQL.png';
import PythonforDataScience from './QualificationImg/PythonforDataScience.jpg'
import WhatisDataScience from './QualificationImg/WhatisDataScience.jpg'

export const QualificatinData = [
    {
        img: python,
        description: 'Python'
    },
    {
        img: Pandas,
        description: 'Pandas'
    },
    {
        img: Intro_ML,
        description: 'Intro to Machine Learning'
    },
    {
        img: Inter_ML,
        description: 'Intermediate Machine Learning'
    },
    {
        img: DataCleaning,
        description: 'Data Cleaning'
    },
    {
        img: DataVisualization,
        description: 'Data Visualization'
    },
    {
        img: IntrotoSQL,
        description: 'Intro to SQL'
    },

]

export const CourseraData = [
    {
        img: PythonforDataScience,
        description: 'Python for Data Science'
    },
    {
        img: WhatisDataScience,
        description: 'What is Data Science?'
    },
]

export const Kaggle = 'https://cdn.freelogovectors.net/wp-content/uploads/2018/06/kaggle-logo-900x342.png'
export const Cousera = 'data:image/png;base64,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'