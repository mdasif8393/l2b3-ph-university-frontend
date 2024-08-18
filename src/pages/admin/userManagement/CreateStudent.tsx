import { Button, Col, Divider, Row } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHDatePicker from "../../../components/form/PHDatePicker";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import PHSelect from "../../../components/form/PHSelect";
import { bloodGroupOptions, genderOptions } from "../../../constants/global";
import {
  useGetAcademicDepartmentsQuery,
  useGetAllSemestersQuery,
} from "../../../redux/features/admin/academicManagement.api";
import { useAddStudentMutation } from "../../../redux/features/admin/userManagement.api";

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
    academicDepartment: "6664811baa4fc29421b23b8e",
    profileImg: "https://example.com/profile.jpg",
  },
};

const studentDefaultValues = {
  name: {
    firstName: "Samin",
    middleName: "Israr",
    lastName: "Ravi",
  },
  gender: "male",
  contactNo: "2",
  emergencyContactNo: "0987654321",
  email: "ravi3@example.com",
  avatar: "https://example.com/avatar.jpg",
  bloodGroup: "O+",
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
};

const CreateStudent = () => {
  const [addStudent, { data, error }] = useAddStudentMutation();

  // make academic semester options
  const { data: sData, isLoading: sIsLoading } =
    useGetAllSemestersQuery(undefined);

  const semesterOptions = sData?.data?.map((item) => ({
    value: item._id,
    label: `${item.name} ${item.year}`,
  }));

  const { data: dData, isLoading: dIsLoading } = useGetAcademicDepartmentsQuery(
    undefined
    // { skip: sIsLoading }
  );

  const departmentOptions = dData?.data?.map((item) => ({
    value: item._id,
    label: item.name,
  }));

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const studentData = {
      password: "student123",
      student: data,
    };
    const formData = new FormData();
    formData.append("data", JSON.stringify(studentData));
    addStudent(formData);
  };

  return (
    <div>
      <Row>
        <Col span={24}>
          <PHForm onSubmit={onSubmit} defaultValues={studentDefaultValues}>
            <Divider>Personal Info.</Divider>
            <Row gutter={8}>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput type="text" name="name.firstName" label="First Name" />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="name.middleName"
                  label="Middle Name"
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput type="text" name="name.lastName" label="Last Name" />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHSelect
                  options={genderOptions}
                  name="gender"
                  label="Gender"
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHDatePicker name="dateOfBirth" label="Date of Birth" />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHSelect
                  options={bloodGroupOptions}
                  name="bloogGroup"
                  label="Blood group"
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                {/* picture */}
              </Col>
            </Row>
            <Divider>Contact Info.</Divider>
            <Row gutter={8}>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput type="text" name="email" label="Email" />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput type="text" name="contactNo" label="Contact" />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="emergencyContactNo"
                  label="Emergency Contact"
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="presentAddress"
                  label="Present Address"
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="permanentAddress"
                  label="Permanent Address"
                />
              </Col>
            </Row>
            <Divider>Guardian</Divider>
            <Row gutter={8}>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="guardian.fatherName"
                  label="Father Name"
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="guardian.fatherOccupation"
                  label="Father Occupation"
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="guardian.fatherContactNo"
                  label="Father ContactNo"
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="guardian.motherName"
                  label="Mother Name"
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="guardian.motherOccupation"
                  label="Mother Occupation"
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="guardian.motherContactNo"
                  label="Mother ContactNo"
                />
              </Col>
            </Row>
            <Divider>Local Guardian</Divider>
            <Row gutter={8}>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput type="text" name="localGuardian.name" label="Name" />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="localGuardian.occupation"
                  label="Occupation"
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="localGuardian.contactNo"
                  label="Contact No."
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHInput
                  type="text"
                  name="localGuardian.address"
                  label="Address"
                />
              </Col>
            </Row>
            <Divider>Academic Info.</Divider>
            <Row gutter={8}>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHSelect
                  options={semesterOptions}
                  disabled={sIsLoading}
                  name="admissionSemester"
                  label="Admission Semester"
                />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                <PHSelect
                  options={departmentOptions}
                  disabled={dIsLoading}
                  name="academicDepartment"
                  label="Admission Department"
                />
              </Col>
            </Row>
            <Button htmlType="submit">Submit</Button>
          </PHForm>
        </Col>
      </Row>
    </div>
  );
};

export default CreateStudent;
