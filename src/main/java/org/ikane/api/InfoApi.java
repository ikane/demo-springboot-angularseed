package org.ikane.api;

import org.ikane.dto.FormDataDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/api")
public class InfoApi {
	
	final static Logger logger = LoggerFactory.getLogger(InfoApi.class);
	
	@RequestMapping(value="/info", method=RequestMethod.GET)
	public String home() {
		logger.debug("Home");
		
		return "Hello";
	}

	@RequestMapping(value="/info", method=RequestMethod.POST)
	public void saveData(@RequestBody FormDataDto dto) {
		logger.debug("Saving data...");
	}
}
