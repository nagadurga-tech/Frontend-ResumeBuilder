const MinimalTemplate = ({ data, accentColor }) => {

  const formatDate = (dateStr) => {
    if (!dateStr) return "";

    const [year, month] = dateStr.split("-");

    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-900 px-8 py-8 font-sans leading-relaxed">

      {/* HEADER */}
      <header className="border-b-2 pb-5 mb-6">

        <h1
          className="text-3xl font-bold tracking-wide uppercase"
          style={{ color: accentColor }}
        >
          {data.personal_info?.full_name || "Your Name"}
        </h1>

        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-700">

          {data.personal_info?.phone && (
            <span>{data.personal_info.phone}</span>
          )}

          {data.personal_info?.email && (
            <span>{data.personal_info.email}</span>
          )}

          {data.personal_info?.location && (
            <span>{data.personal_info.location}</span>
          )}

          {data.personal_info?.linkedin && (
            <a
              href={data.personal_info.linkedin}
              className="hover:underline text-blue-700 break-all"
            >
              LinkedIn
            </a>
          )}

          {data.personal_info?.website && (
            <a
              href={data.personal_info.website}
              className="hover:underline text-blue-700 break-all"
            >
              Portfolio
            </a>
          )}

        </div>
      </header>

      {/* SUMMARY */}
      {data.professional_summary && (
        <section className="mb-6">

          <h2
            className="text-[15px] font-bold uppercase border-b pb-1 mb-2"
            style={{ color: accentColor }}
          >
            Professional Summary
          </h2>

          <p className="text-[14px] text-gray-800 leading-6">
            {data.professional_summary}
          </p>

        </section>
      )}

      {/* EXPERIENCE */}
      {data.experience?.length > 0 && (
        <section className="mb-6">

          <h2
            className="text-[15px] font-bold uppercase border-b pb-1 mb-4"
            style={{ color: accentColor }}
          >
            Experience
          </h2>

          <div className="space-y-5">

            {data.experience.map((exp, index) => (
              <div key={index}>

                {/* Top Row */}
                <div className="flex justify-between items-start">

                  <div>
                    <h3 className="text-[16px] font-semibold">
                      {exp.position}
                    </h3>

                    <p className="text-[14px] text-gray-700 font-medium">
                      {exp.company}
                    </p>
                  </div>

                  <span className="text-[13px] text-gray-500 whitespace-nowrap">
                    {formatDate(exp.start_date)} -{" "}
                    {exp.is_current
                      ? "Present"
                      : formatDate(exp.end_date)}
                  </span>

                </div>

                {/* Description */}
                {exp.description && (
                  <ul className="list-disc ml-5 mt-2 text-[14px] text-gray-800 space-y-1">

                    {exp.description
                      .split("\n")
                      .filter(Boolean)
                      .map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}

                  </ul>
                )}

              </div>
            ))}

          </div>

        </section>
      )}

      {/* PROJECTS */}
      {data.projects?.length > 0 && (
        <section className="mb-6">

          <h2
            className="text-[15px] font-bold uppercase border-b pb-1 mb-4"
            style={{ color: accentColor }}
          >
            Projects
          </h2>

          <div className="space-y-5">

            {data.projects.map((project, index) => (
              <div key={index}>

                <div className="flex justify-between items-start gap-4">

                  <div>

                    <h3 className="text-[16px] font-semibold">
                      {project.title}
                    </h3>

                    {project.technologies && (
                      <p className="text-[13px] text-gray-600 mt-1">
                        <span className="font-semibold">Tech Stack:</span>{" "}
                        {project.technologies}
                      </p>
                    )}

                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[13px] text-blue-700 hover:underline whitespace-nowrap"
                    >
                      Source Code
                    </a>
                  )}

                </div>

                {project.description && (
                  <ul className="list-disc ml-5 mt-2 text-[14px] text-gray-800 space-y-1">

                    {project.description
                      .split("\n")
                      .filter(Boolean)
                      .map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}

                  </ul>
                )}

              </div>
            ))}

          </div>

        </section>
      )}

      {/* EDUCATION */}
      {data.education?.length > 0 && (
        <section className="mb-6">

          <h2
            className="text-[15px] font-bold uppercase border-b pb-1 mb-4"
            style={{ color: accentColor }}
          >
            Education
          </h2>

          <div className="space-y-4">

            {data.education.map((edu, index) => (
              <div
                key={index}
                className="flex justify-between items-start"
              >

                <div>

                  <h3 className="text-[15px] font-semibold">
                    {edu.degree}
                    {edu.field && ` in ${edu.field}`}
                  </h3>

                  <p className="text-[14px] text-gray-700">
                    {edu.institution}
                  </p>

                  {edu.gpa && (
                    <p className="text-[13px] text-gray-500">
                      CGPA: {edu.gpa}
                    </p>
                  )}

                </div>

                <span className="text-[13px] text-gray-500 whitespace-nowrap">
                  {formatDate(edu.graduation_date)}
                </span>

              </div>
            ))}

          </div>

        </section>
      )}

      {/* SKILLS */}
      {data.skills?.length > 0 && (
        <section>

          <h2
            className="text-[15px] font-bold uppercase border-b pb-1 mb-3"
            style={{ color: accentColor }}
          >
            Technical Skills
          </h2>

          <div className="flex flex-wrap gap-2">

            {data.skills.map((skill, index) => (
              <span
                key={index}
                className="text-[13px] px-3 py-1 border border-gray-300 rounded-sm bg-gray-50"
              >
                {skill}
              </span>
            ))}

          </div>

        </section>
      )}

    </div>
  );
};

export default MinimalTemplate;