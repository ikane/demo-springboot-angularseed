package org.ikane.dto;

import java.io.Serializable;
import java.util.Date;

public class FormDataDto implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -7309891078772185351L;
	
	private String name;
	private String email;
	private String comments;
	private Date dateStart;
	private Date dateEnd;
	
	public FormDataDto() {
		// TODO Auto-generated constructor stub
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public Date getDateStart() {
		return dateStart;
	}

	public void setDateStart(Date dateStart) {
		this.dateStart = dateStart;
	}

	public Date getDateEnd() {
		return dateEnd;
	}

	public void setDateEnd(Date dateEnd) {
		this.dateEnd = dateEnd;
	}
	
	

}
