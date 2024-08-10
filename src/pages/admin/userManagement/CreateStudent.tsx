import { Button, Col, Divider, Row } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";

const studentDummyData = {
  password: "ami123",
  student: {
    name: {
      firstName: "Samin",
      middleName: "Israr",
      lastName: "Ravi",
    },
    gender: "male",
    dateOfBirth: "2005-05-15",
    contactNo: "2",
    emergencyContactNo: "0987654321",
    email: "ravi@example.com",
    avatar: "https://example.com/avatar.jpg",
    bloogGroup: "O+",
    presentAddress: "1234 Elm Street, Springfield, IL",
    permanentAddress: "5678 Oak Avenue, Springfield, IL",
    guardian: {
      fatherName: "James Smith",
      fatherOccupation: "Engineer",
      fatherContactNo: "1234567890",
      motherName: "Jane Smith",
      motherOccupation: "Doctor",
      motherContactNo: "0987654321",
    },
    localGuardian: {
      name: "Michael Johnson",
      occupation: "Teacher",
      contactNo: "1122334455",
      address: "7890 Pine Road, Springfield, IL",
    },
    admissionSemester: "665816c07964f622098ebf0a",
    academicDepartment: "66597130e664de029bd2a07e",
    profileImg: "https://example.com/profile.jpg",
  },
};

const CreateStudent = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    // const formData = new FormData();
    // formData.append("data", JSON.stringify(data));

    // //! This is for development
    // //! just for checking
    // console.log(Object.fromEntries(formData));
  };

  return (
    <Row>
      <Col span={24}>
        <PHForm onSubmit={onSubmit}>
          <Divider>Personal Info</Divider>
          <Row gutter={8}>
            <Col span={24} lg={{ span: "8" }} md={{ span: "12" }}>
              <PHInput type="text" name="name.firstName" label="First Name" />
            </Col>
            <Col span={24} lg={{ span: "8" }} md={{ span: "12" }}>
              <PHInput type="text" name="name.middleName" label="Middle Name" />
            </Col>
            <Col span={24} lg={{ span: "8" }} md={{ span: "12" }}>
              <PHInput type="text" name="name.lastName" label="Last Name" />
            </Col>
            <Col span={24} lg={{ span: "8" }} md={{ span: "12" }}>
              <PHInput type="text" name="gender" label="Gender" />
            </Col>
            <Col span={24} lg={{ span: "8" }} md={{ span: "12" }}>
              <PHInput type="text" name="dateOfBirth" label="Date of Birth" />
            </Col>
            <Col span={24} lg={{ span: "8" }} md={{ span: "12" }}>
              <PHInput type="text" name="bloogGroup" label="Blood Group" />
            </Col>
          </Row>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default CreateStudent;
