export interface IPropsDropdown {
    label: string | number;
    value: string | number;
  }
  
 export interface ILogin {
    nickname: string;
    password: string;
  }
  
 export interface IBaseSize {
    width?: number;
    height?: number;
  }
  
 export interface IBase {
    id: number;
    deletedAt: Date;
    createdAt: Date;
    updatedAt: Date;
    createdBy: number;
  }
  
 export interface IControl extends IBase {
    path: string;
    name: string;
    controlChildrens: IControl[];
  }
  
 export interface IUser extends IBase {
    fullname: string | null;
    nickname: string;
    password?: string;
    role: number;
    agencyId: number;
  }
  
 export interface IClass extends IBase {
    name: string;
    teacherId: number;
    courseId: number;
    blockId: number;
    success: boolean;
    classToStudents: IClassToStudent[];
    teacher: IUser;
  }
  
 export interface IClassToStudent extends IBase {
    classId: number;
    userId: number;
    user: IUser;
    class: IClass;
  }
  
 export interface ICourse extends IBase {
    from: number;
    to: number;
    courseName: string;
    classList: IClass[];
  }
  
 export interface IUnit extends IBase {
    name: string;
    studyProgramId: number;
    lessons: ILesson[];
  }
  
 export interface ILesson extends IBase {
    name: string;
    unitId: number;
    variables: IVariable[];
  }
  
 export interface IStudyProgram extends IBase {
    name: string;
    blockId: number;
  }
  
 export interface IStudyProgram extends IBase {
    name: string;
    blockId: number;
  }
  
 export interface IClassManagerLesson {
    id: number;
    classManagerId: number;
    lessonId: number;
    active: boolean;
    lesson: ILesson;
    numberRepeat: number;
  }
  
 export interface IClassManager extends IBase {
    classId: number;
    unitId: number;
    unit: IUnit;
    classManagerLessons: IClassManagerLesson[];
  }
  
 export interface IClassStudent {
    id: number;
    classId: number;
    userId: number;
    class: IClass;
    user: IUser;
  }
  
 export interface IVariable extends IBase {
    name: string;
    vi: string;
    lessonId: number;
  }
  
 export interface IExercise extends IBase {
    userId: number;
    classManagerLessonId: number;
    exerciseVariables?: IExerciseVariable[];
  }
  
 export interface IExerciseVariable {
    id: number;
    exerciseId: number;
    variableId: number;
    count: number;
    variable: IVariable;
  }
  