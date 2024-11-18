import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollment`;
export const enrollStudent = async (userId: string, courseId: string) => {
  const response = await axios.post(`${ENROLLMENTS_API}/${userId}/${courseId}`);
  return response.data;
};
export const unenrollStudent = async (userId: string, courseId: string) => {
  const { data } = await axios.delete(
    `${ENROLLMENTS_API}/${userId}/${courseId}`
  );
  return data;
};
export const getEnrollments = async (userId: string) => {
  const response = await axios.get(`${ENROLLMENTS_API}/${userId}`);
  console.log(response.data);
  return response.data;
};
