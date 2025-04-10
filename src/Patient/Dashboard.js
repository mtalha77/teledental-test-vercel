import { Button, Col, Popconfirm, Radio, Row, Table } from "antd";
import { useQuery } from "react-query";
import { useUserContext } from "../Context/userContext";
import Header from "../Commons/Header";
import {
  useRequestDelete,
  useRequestUpdate,
} from "../Hooks/useRequestUpdateMutation";
import { getRequests, getRequestStats } from "../Commons/apis/commonV1";
import makeStyles from "@mui/styles/makeStyles";
import MedicalHistoryWizard from "../Patient/MedicalHistoryWizard";
import React from "react";
import { useHistory } from "react-router";
import {
  DeleteOutlined,
  FilterOutlined,
  MessageOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  cardCtn: {
    marginBottom: "16px",
    [theme.breakpoints.down("md")]: {
      display: "flex",
    },
  },
  mainContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
    padding: "30px 20px 0",
  },
  welcomeCard: {
    backgroundColor: "#0071BC",
    color: "white",
    borderRadius: "8px",
    padding: "30px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  welcomeTitle: {
    color: "white",
    fontSize: "28px",
    fontWeight: 700,
    fontFamily: "'Inter', sans-serif",
    borderBottom: "1px solid rgba(255,255,255,0.3)",
    paddingBottom: "15px",
    marginBottom: "30px",
  },
  statsContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "40px",
  },
  statBox: {
    textAlign: "center",
  },
  statLabel: {
    fontSize: "14px",
    marginBottom: "10px",
    fontWeight: 600,
    fontFamily: "'Inter', sans-serif",
  },
  statValue: {
    fontSize: "60px",
    fontWeight: "bold",
  },
  bookButton: {
    backgroundColor: "#F7A5F9",
    borderRadius: "30px",
    border: "none",
    color: "white",
    height: "auto",
    padding: "12px 20px",
    fontSize: "16px",
    fontWeight: 800,
    fontFamily: "'Inter', sans-serif",
    marginTop: "auto",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  messageCard: {
    borderRadius: "8px",
    border: "3px solid #0071BC",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  },
  messageTitle: {
    color: "#0071BC",
    fontSize: "24px",
    fontWeight: 700,
    fontFamily: "'Inter', sans-serif",
    marginBottom: "20px",
  },
  messageTable: {
    width: "100%",
  },
  appointmentTitle: {
    color: "#0071BC",
    fontSize: "24px",
    fontWeight: 800,
    fontFamily: "'Inter', sans-serif",
    marginTop: "40px",
    marginBottom: "20px",
  },
  filterButton: {
    backgroundColor: "#F7A5F9",
    borderRadius: "30px",
    border: "none",
    color: "white",
    height: "auto",
    padding: "8px 20px",
  },
  viewButton: {
    color: "#0071BC",
    textDecoration: "underline",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 0,
  },
  tableHeader: {
    color: "#0071BC !important",
    fontWeight: 700,
    fontFamily: "'Inter', sans-serif",
  },
  joinButton: {
    backgroundColor: "#0071BC",
    borderColor: "#0071BC",
    borderRadius: "30px",
  },
  blueTableRows: {
    "& .ant-table-tbody > tr > td": {
      borderBottom: "1px solid #0071BC",
    },
    "& .ant-table-thead > tr > th": {
      borderBottom: "1px solid #0071BC",
    },
  },
  radioGroup: {
    "& .ant-radio-button-wrapper": {
      borderRadius: "4px",
      margin: "0 4px",
      fontFamily: "'Inter', sans-serif",
    },
    "& .ant-radio-button-wrapper-checked": {
      backgroundColor: "#0071BC !important",
      borderColor: "#0071BC !important",
      color: "white !important",
      "&:hover": {
        backgroundColor: "#0071BC !important",
        borderColor: "#0071BC !important",
        color: "white !important",
      },
      "&:before": {
        backgroundColor: "#0071BC !important",
        borderColor: "#0071BC !important",
      },
      "&:focus-within": {
        boxShadow: "0 0 0 3px rgba(0, 113, 188, 0.2) !important",
      },
    },
    "& .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)":
      {
        backgroundColor: "#0071BC !important",
        borderColor: "#0071BC !important",
        color: "white !important",
        "&:hover": {
          color: "white !important",
        },
      },
  },
  deleteButton: {
    color: "#ff4d4f",
    marginLeft: "10px",
  },
  actionButtons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));
function Dashboard() {
  const { user } = useUserContext();
  const history = useHistory();
  const classes = useStyles();
  const { data, isLoading } = useQuery("requests-dashboard", async () => {
    const res = await getRequests({ queryParam: { limit: 20 } });
    return res.data;
  });
  const { data: statsData, isLoading: statsLoading } = useQuery(
    "requestStats",
    async () => {
      const res = await getRequestStats();
      return res.data;
    }
  );
  const { deleteRequestFn } = useRequestDelete("requests-dashboard");
  const { updateRequestFn } = useRequestUpdate("requests-dashboard");
  const [
    isMedicalHistoryWizardModalVisible,
    setMedicalHistoryWizardModalVisible,
  ] = React.useState(false);
  function updateRequest(id, value) {
    const record = data.find((item) => item._id === id);
    if (record && record.isActive !== value) {
      updateRequestFn(id, { isActive: value });
    }
  }
  const messageColumns = [
    {
      title: <span className={classes.tableHeader}>Dentist Name</span>,
      dataIndex: "dentistName",
      key: "dentistName",
      render: (text, record) => (
        <span
          style={{
            color: "#0071BC",
            fontWeight: 500,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Dr. {record.dentistName || "Assigned Dentist"}
        </span>
      ),
    },
    {
      title: <span className={classes.tableHeader}>Date</span>,
      dataIndex: "createdAt",
      key: "createdAt",
      sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
      render: (text) => (
        <span
          style={{
            color: "#0071BC",
            fontWeight: 500,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {new Date(text).toLocaleDateString()}
        </span>
      ),
    },
    {
      title: (
        <span className={classes.tableHeader}>
          <MessageOutlined
            style={{ marginRight: "15px", marginTop: "10px", fontSize: "18px" }}
          />
        </span>
      ),
      dataIndex: "description",
      key: "description",
      render: (text) => (
        <span
          style={{
            color: "#0071BC",
            fontWeight: 700,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {text && text.length > 30 ? text.substring(0, 30) + "..." : text}
        </span>
      ),
    },
  ];
  const appointmentColumns = [
    {
      title: <span className={classes.tableHeader}>Dentist Name</span>,
      dataIndex: "dentistName",
      key: "dentistName",
      render: (text, record) => (
        <span
          style={{
            color: "#0071BC",
            fontWeight: 500,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Dr. {record.dentistName || "Assigned Dentist"}
        </span>
      ),
    },
    {
      title: <span className={classes.tableHeader}>Date</span>,
      dataIndex: "createdAt",
      key: "createdAt",
      sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
      render: (text) => (
        <span
          style={{
            color: "#0071BC",
            fontWeight: 500,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {new Date(text).toLocaleDateString()}
        </span>
      ),
    },
    {
      title: <span className={classes.tableHeader}>Patient Form</span>,
      key: "patientForm",
      render: (_, record) => (
        <Link
          style={{
            color: "#0071BC",
            fontWeight: 700,
            fontFamily: "'Inter', sans-serif",
          }}
          to={`/patients/request/${record._id}`}
          className={classes.viewButton}
        >
          View Form
        </Link>
      ),
    },
    {
      title: <span className={classes.tableHeader}>Post Appointment Form</span>,
      key: "postAppointmentForm",
      render: (_, record) => (
        <Link
          style={{
            color: "#0071BC",
            fontWeight: 700,
            fontFamily: "'Inter', sans-serif",
          }}
          to={`/patients/messages/${record._id}`}
          className={classes.viewButton}
        >
          View Dentist Notes
        </Link>
      ),
    },
    {
      title: <span className={classes.tableHeader}>Status</span>,
      dataIndex: "isActive",
      key: "isActive",
      render: (text, record) => (
        <Radio.Group
          buttonStyle="solid"
          defaultValue={text}
          onChange={(e) => updateRequest(record._id, e.target.value)}
          className={classes.radioGroup}
        >
          <Radio.Button value={true}>Active</Radio.Button>
          <Radio.Button value={false}>Inactive</Radio.Button>
        </Radio.Group>
      ),
    },
    {
      title: <span className={classes.tableHeader}>Actions</span>,
      key: "actions",
      render: (_, record) => (
        <div className={classes.actionButtons}>
          {record.isActive && (
            <Button
              className={classes.joinButton}
              type="primary"
              shape="round"
              size="small"
              onClick={() => history.push(`/patients/request/${record._id}`)}
            >
              Join
            </Button>
          )}
          <Popconfirm
            title="Are you sure to delete this Request?"
            onConfirm={() => deleteRequestFn(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              type="text"
              icon={<DeleteOutlined />}
              className={classes.deleteButton}
              danger
            />
          </Popconfirm>
          <Link to={`/patients/request/${record._id}`}>
            <RightOutlined style={{ color: "#0071BC", marginLeft: "10px" }} />
          </Link>
        </div>
      ),
    },
  ];
  return (
    <>
      <div>
        <Header />
      </div>
      <div className={classes.mainContainer}>
        <Row gutter={[24, 24]} style={{ marginTop: "100px" }}>
          <Col xs={24} md={10}>
            <div className={classes.welcomeCard}>
              <h2 className={classes.welcomeTitle}>
                Welcome {user?.name || "User Name"}
              </h2>
              <div className={classes.statsContainer}>
                <div className={classes.statBox}>
                  <div className={classes.statLabel}>
                    Teledental
                    <br />
                    Appointment History
                  </div>
                  <div className={classes.statValue}>
                    {!statsLoading && statsData
                      ? statsData.active + statsData.inActive
                      : "..."}
                  </div>
                </div>
                <div className={classes.statBox}>
                  <div className={classes.statLabel}>
                    Active
                    <br />
                    Requests
                  </div>
                  <div className={classes.statValue}>
                    {!statsLoading && statsData ? statsData.active : "..."}
                  </div>
                </div>
              </div>
              <Button
                className={classes.bookButton}
                onClick={() => history.push(`/patients/create-request`)}
              >
                Book An Appointment
              </Button>
            </div>
          </Col>
          <Col xs={24} md={14}>
            <div className={classes.messageCard}>
              <div style={{ padding: "20px" }}>
                <h2 className={classes.messageTitle}>Recent Messages:</h2>
                <Table
                  dataSource={data || []}
                  columns={messageColumns}
                  pagination={false}
                  showHeader={true}
                  className={`${classes.messageTable} ${classes.blueTableRows}`}
                  rowKey="_id"
                  size="middle"
                  loading={isLoading}
                />
              </div>
            </div>
          </Col>
        </Row>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2 className={classes.appointmentTitle}>Appointment History:</h2>
            <Button className={classes.filterButton} icon={<FilterOutlined />}>
              Filter
            </Button>
          </div>
          <Table
            dataSource={data || []}
            columns={appointmentColumns}
            pagination={{ pageSize: 5 }}
            className={`${classes.messageTable} ${classes.blueTableRows}`}
            rowKey="_id"
            size="middle"
            loading={isLoading}
          />
        </div>
      </div>
      <MedicalHistoryWizard
        isModalVisible={isMedicalHistoryWizardModalVisible}
        setIsModalVisible={setMedicalHistoryWizardModalVisible}
      />
    </>
  );
}
export default Dashboard;
