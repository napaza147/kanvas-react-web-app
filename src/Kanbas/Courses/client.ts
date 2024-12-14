import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const USERS_API = `${REMOTE_SERVER}/api/users`;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const createCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.post(COURSES_API, course);
  return data;
 };
 
export const fetchAllCourses = async () => {
  const { data } = await axiosWithCredentials.get(COURSES_API);
  return data;
};

export const deleteCourse = async (id: string) => {
  const { data } = await axiosWithCredentials.delete(`${COURSES_API}/${id}`);
  return data;
};

export const updateCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.put(`${COURSES_API}/${course._id}`, course);
  return data;
};

export const findModulesForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};

export const createModuleForCourse = async (courseId: string, module: any) => {
  const response = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/modules`,
    module
  );
  return response.data;
};

export const createQuizForCourse = async (courseId: string | undefined, quiz: any) => {
  const response = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/quizzes`,
    quiz
  );
  return response.data;
};


export const fetchAllEnrollments = async () => {
  const { data } = await axiosWithCredentials.get(ENROLLMENTS_API);
  return data;
}

export const enrollUserInCourse = async (userId: any, courseId: any) => {
  const response = await axiosWithCredentials.post(`${ENROLLMENTS_API}/${userId}/course`, courseId);
  return response.data;
};

export const unEnrollFromCourse = async (enrollmentId: string) => {
  const response = await axiosWithCredentials.delete(`${ENROLLMENTS_API}/${enrollmentId}`);
  return response.data;
};

export const findUsersForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/users`);
  return response.data;
 };

 export const findQuizzesForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials
    .get(`${COURSES_API}/${courseId}/quizzes`);
  return response.data;
};
 
export const findAssignmentsForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials
    .get(`${COURSES_API}/${courseId}/assignments`);
  return response.data;
};

export const createAssignmentForCourse = async (courseId: string | undefined, assignment: any) => {
  const response = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/assignments`,
    assignment
  );
  return response.data;
};